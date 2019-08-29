import { describe, it } from 'mocha'
import { expect } from 'chai'
import { make } from '../../src/lib/url'

const pr = 'https'
const hs = 'www.test.tld'
const pt = '/path'
const arr = { a: ['f1', 'f2'] }
const simple = { s: 'src' }
const hash = 'hash'

const ref = `${pr}://www.ref.tld`

describe('/src/lib/url.js', () => {
  describe('make url', () => {
    it('entire url provided', () => {
      const test = make({ url: `${pr}://${hs}${pt}`, ref })
      expect(test).to.eq(`${pr}://${hs}${pt}`)
    })

    it('no proto provided - with path', () => {
      const test = make({ url: `//${hs}${pt}`, ref })
      expect(test).to.eq(`${pr}://${hs}${pt}`)
    })

    it('no proto provided - no path', () => {
      const test = make({ url: `//${hs}`, ref })
      expect(test).to.eq(`${pr}://${hs}/`)
    })

    it('path provided', () => {
      const test = make({ url: `${pt}`, ref })
      expect(test).to.eq(`${ref}${pt}`)
    })

    it('nothing provided', () => {
      const test = make({ref })
      expect(test).to.eq(`${ref}/`)
    })
  })

  describe('make query string', () => {
    it('simple structs', () => {
      const test = make({ ref, query: simple })
      expect(test).to.eq(`${ref}/?s=src`)
    })

    it('arrays', () => {
      const test = make({ ref, query: arr })
      expect(test).to.eq(`${ref}/?a[]=f1&a[]=f2`)
    })

    it('mix', () => {
      const test = make({ ref, query: { ...arr, ...simple } })
      expect(test).to.contain('a[]=f1&a[]=f2')
      expect(test).to.contain('s=src')
    })
  })

  it('add hash', () => {
    const test = make({ hash, ref })
      expect(test).to.eq(`${ref}/#${hash}`)
  })
})
