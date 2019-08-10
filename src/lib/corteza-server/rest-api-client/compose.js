import axios from 'axios'

/* eslint-disable */

// This is a generated file.
// See README.md file for update instructions

export default class Compose {
  constructor ({baseURL, headers, jwt} = {}) {
    this.jwt = null
    this.baseURL = baseURL

    this.headers = {
      'Content-Type': 'application/json',
    }

    this.setHeaders(headers)

    if (this.isValidJWT(jwt)) {
      this.setJWT(jwt)
    }
  }

  setJWT (jwt) {
    if (this.isValidJWT(jwt)) {
      this.jwt = jwt
      this.headers['Authorization'] = 'Bearer ' + jwt
    } else {
      throw new Error('JWT value too short', {
        jwt,
      })
    }

    return this
  }

  setHeaders (headers) {
    if (typeof headers === 'object') {
      this.headers = headers
    }

    return this
  }

  isValidJWT (jwt) {
    return jwt && jwt.length > 100
  }

  stdReject (reject) {
    return (error) => {
      reject(error)
    }
  }

  stdResolve (resolve, reject) {
    return (response) => {
      if (response.data.error) {
        reject(response.data.error)
      } else {
        resolve(response.data.response)
      }
    }
  }

  api () {
    return axios.create({
      withCredentials: true,
      baseURL: this.baseURL,
      headers: this.headers,
    })
  }

  // List namespaces
  async namespaceList (args = {}) {
    const {query, page, perPage, } = args


    let cfg = {
      method: 'get',
      url: this.namespaceListEndpoint({  }),
    }
    cfg.params = {
      query,
      page,
      perPage,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  namespaceListEndpoint () {
    return `/namespace/`
  }

  // Create namespace
  async namespaceCreate (args = {}) {
    const {name, slug, enabled, meta, } = args
    if (!name) {
      console.error('namespaceCreate failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }
    if (!meta) {
      console.error('namespaceCreate failed, field meta is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field meta is empty')
    }

    let cfg = {
      method: 'post',
      url: this.namespaceCreateEndpoint({  }),
    }

    cfg.data = {
      name,
      slug,
      enabled,
      meta,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  namespaceCreateEndpoint () {
    return `/namespace/`
  }

  // Read namespace
  async namespaceRead (args = {}) {
    const {namespaceID, } = args
    if (!namespaceID) {
      console.error('namespaceRead failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.namespaceReadEndpoint({
        namespaceID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  namespaceReadEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}`
  }

  // Update namespace
  async namespaceUpdate (args = {}) {
    const {namespaceID, name, slug, enabled, meta, updatedAt, } = args
    if (!namespaceID) {
      console.error('namespaceUpdate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!name) {
      console.error('namespaceUpdate failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }
    if (!meta) {
      console.error('namespaceUpdate failed, field meta is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field meta is empty')
    }

    let cfg = {
      method: 'post',
      url: this.namespaceUpdateEndpoint({
        namespaceID,
      }),
    }

    cfg.data = {
      name,
      slug,
      enabled,
      meta,
      updatedAt,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  namespaceUpdateEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}`
  }

  // Delete namespace
  async namespaceDelete (args = {}) {
    const {namespaceID, } = args
    if (!namespaceID) {
      console.error('namespaceDelete failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.namespaceDeleteEndpoint({
        namespaceID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  namespaceDeleteEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}`
  }

  // List available pages
  async pageList (args = {}) {
    const {namespaceID, selfID, query, page, perPage, } = args
    if (!namespaceID) {
      console.error('pageList failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.pageListEndpoint({
        namespaceID,
      }),
    }
    cfg.params = {
      selfID,
      query,
      page,
      perPage,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  pageListEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}/page/`
  }

  // Create page
  async pageCreate (args = {}) {
    const {namespaceID, selfID, moduleID, title, description, visible, blocks, } = args
    if (!namespaceID) {
      console.error('pageCreate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!title) {
      console.error('pageCreate failed, field title is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field title is empty')
    }
    if (!blocks) {
      console.error('pageCreate failed, field blocks is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field blocks is empty')
    }

    let cfg = {
      method: 'post',
      url: this.pageCreateEndpoint({
        namespaceID,
      }),
    }

    cfg.data = {
      selfID,
      moduleID,
      title,
      description,
      visible,
      blocks,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  pageCreateEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}/page/`
  }

  // Get page details
  async pageRead (args = {}) {
    const {namespaceID, pageID, } = args
    if (!namespaceID) {
      console.error('pageRead failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!pageID) {
      console.error('pageRead failed, field pageID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field pageID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.pageReadEndpoint({
        namespaceID,
        pageID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  pageReadEndpoint ({namespaceID, pageID, } = {}) {
    return `/namespace/${namespaceID}/page/${pageID}`
  }

  // Get page all (non-record) pages, hierarchically
  async pageTree (args = {}) {
    const {namespaceID, } = args
    if (!namespaceID) {
      console.error('pageTree failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.pageTreeEndpoint({
        namespaceID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  pageTreeEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}/page/tree`
  }

  // Update page
  async pageUpdate (args = {}) {
    const {namespaceID, pageID, selfID, moduleID, title, description, visible, blocks, } = args
    if (!namespaceID) {
      console.error('pageUpdate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!pageID) {
      console.error('pageUpdate failed, field pageID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field pageID is empty')
    }
    if (!title) {
      console.error('pageUpdate failed, field title is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field title is empty')
    }
    if (!blocks) {
      console.error('pageUpdate failed, field blocks is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field blocks is empty')
    }

    let cfg = {
      method: 'post',
      url: this.pageUpdateEndpoint({
        namespaceID,
        pageID,
      }),
    }

    cfg.data = {
      selfID,
      moduleID,
      title,
      description,
      visible,
      blocks,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  pageUpdateEndpoint ({namespaceID, pageID, } = {}) {
    return `/namespace/${namespaceID}/page/${pageID}`
  }

  // Reorder pages
  async pageReorder (args = {}) {
    const {namespaceID, selfID, pageIDs, } = args
    if (!namespaceID) {
      console.error('pageReorder failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!selfID) {
      console.error('pageReorder failed, field selfID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field selfID is empty')
    }
    if (!pageIDs) {
      console.error('pageReorder failed, field pageIDs is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field pageIDs is empty')
    }

    let cfg = {
      method: 'post',
      url: this.pageReorderEndpoint({
        namespaceID,
        selfID,
      }),
    }

    cfg.data = {
      pageIDs,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  pageReorderEndpoint ({namespaceID, selfID, } = {}) {
    return `/namespace/${namespaceID}/page/${selfID}/reorder`
  }

  // Delete page
  async pageDelete (args = {}) {
    const {namespaceID, pageID, } = args
    if (!namespaceID) {
      console.error('pageDelete failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!pageID) {
      console.error('pageDelete failed, field pageID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field pageID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.pageDeleteEndpoint({
        namespaceID,
        pageID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  pageDeleteEndpoint ({namespaceID, pageID, } = {}) {
    return `/namespace/${namespaceID}/page/${pageID}`
  }

  // Uploads attachment to page
  async pageUpload (args = {}) {
    const {namespaceID, pageID, upload, } = args
    if (!namespaceID) {
      console.error('pageUpload failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!pageID) {
      console.error('pageUpload failed, field pageID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field pageID is empty')
    }
    if (!upload) {
      console.error('pageUpload failed, field upload is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field upload is empty')
    }

    let cfg = {
      method: 'post',
      url: this.pageUploadEndpoint({
        namespaceID,
        pageID,
      }),
    }

    cfg.data = {
      upload,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  pageUploadEndpoint ({namespaceID, pageID, } = {}) {
    return `/namespace/${namespaceID}/page/${pageID}/attachment`
  }

  // List modules
  async moduleList (args = {}) {
    const {namespaceID, query, page, perPage, } = args
    if (!namespaceID) {
      console.error('moduleList failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.moduleListEndpoint({
        namespaceID,
      }),
    }
    cfg.params = {
      query,
      page,
      perPage,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  moduleListEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}/module/`
  }

  // Create module
  async moduleCreate (args = {}) {
    const {namespaceID, name, fields, meta, } = args
    if (!namespaceID) {
      console.error('moduleCreate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!name) {
      console.error('moduleCreate failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }
    if (!fields) {
      console.error('moduleCreate failed, field fields is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field fields is empty')
    }
    if (!meta) {
      console.error('moduleCreate failed, field meta is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field meta is empty')
    }

    let cfg = {
      method: 'post',
      url: this.moduleCreateEndpoint({
        namespaceID,
      }),
    }

    cfg.data = {
      name,
      fields,
      meta,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  moduleCreateEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}/module/`
  }

  // Read module
  async moduleRead (args = {}) {
    const {namespaceID, moduleID, } = args
    if (!namespaceID) {
      console.error('moduleRead failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!moduleID) {
      console.error('moduleRead failed, field moduleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field moduleID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.moduleReadEndpoint({
        namespaceID,
        moduleID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  moduleReadEndpoint ({namespaceID, moduleID, } = {}) {
    return `/namespace/${namespaceID}/module/${moduleID}`
  }

  // Update module
  async moduleUpdate (args = {}) {
    const {namespaceID, moduleID, name, fields, meta, updatedAt, } = args
    if (!namespaceID) {
      console.error('moduleUpdate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!moduleID) {
      console.error('moduleUpdate failed, field moduleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field moduleID is empty')
    }
    if (!name) {
      console.error('moduleUpdate failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }
    if (!fields) {
      console.error('moduleUpdate failed, field fields is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field fields is empty')
    }
    if (!meta) {
      console.error('moduleUpdate failed, field meta is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field meta is empty')
    }

    let cfg = {
      method: 'post',
      url: this.moduleUpdateEndpoint({
        namespaceID,
        moduleID,
      }),
    }

    cfg.data = {
      name,
      fields,
      meta,
      updatedAt,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  moduleUpdateEndpoint ({namespaceID, moduleID, } = {}) {
    return `/namespace/${namespaceID}/module/${moduleID}`
  }

  // Delete module
  async moduleDelete (args = {}) {
    const {namespaceID, moduleID, } = args
    if (!namespaceID) {
      console.error('moduleDelete failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!moduleID) {
      console.error('moduleDelete failed, field moduleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field moduleID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.moduleDeleteEndpoint({
        namespaceID,
        moduleID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  moduleDeleteEndpoint ({namespaceID, moduleID, } = {}) {
    return `/namespace/${namespaceID}/module/${moduleID}`
  }

  // List of UA scripts
  async moduleUaScripts (args = {}) {
    const {namespaceID, moduleID, } = args
    if (!namespaceID) {
      console.error('moduleUaScripts failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.moduleUaScriptsEndpoint({
        namespaceID,
      }),
    }
    cfg.params = {
      moduleID,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  moduleUaScriptsEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}/module/ua-scripts`
  }

  // Generates report from module records
  async recordReport (args = {}) {
    const {namespaceID, moduleID, metrics, dimensions, filter, } = args
    if (!namespaceID) {
      console.error('recordReport failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!moduleID) {
      console.error('recordReport failed, field moduleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field moduleID is empty')
    }
    if (!dimensions) {
      console.error('recordReport failed, field dimensions is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field dimensions is empty')
    }

    let cfg = {
      method: 'get',
      url: this.recordReportEndpoint({
        namespaceID,
        moduleID,
      }),
    }
    cfg.params = {
      metrics,
      dimensions,
      filter,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  recordReportEndpoint ({namespaceID, moduleID, } = {}) {
    return `/namespace/${namespaceID}/module/${moduleID}/record/report`
  }

  // List/read records from module section
  async recordList (args = {}) {
    const {namespaceID, moduleID, filter, page, perPage, sort, } = args
    if (!namespaceID) {
      console.error('recordList failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!moduleID) {
      console.error('recordList failed, field moduleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field moduleID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.recordListEndpoint({
        namespaceID,
        moduleID,
      }),
    }
    cfg.params = {
      filter,
      page,
      perPage,
      sort,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  recordListEndpoint ({namespaceID, moduleID, } = {}) {
    return `/namespace/${namespaceID}/module/${moduleID}/record/`
  }

  // Create record in module section
  async recordCreate (args = {}) {
    const {namespaceID, moduleID, values, } = args
    if (!namespaceID) {
      console.error('recordCreate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!moduleID) {
      console.error('recordCreate failed, field moduleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field moduleID is empty')
    }
    if (!values) {
      console.error('recordCreate failed, field values is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field values is empty')
    }

    let cfg = {
      method: 'post',
      url: this.recordCreateEndpoint({
        namespaceID,
        moduleID,
      }),
    }

    cfg.data = {
      values,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  recordCreateEndpoint ({namespaceID, moduleID, } = {}) {
    return `/namespace/${namespaceID}/module/${moduleID}/record/`
  }

  // Read records by ID from module section
  async recordRead (args = {}) {
    const {namespaceID, moduleID, recordID, } = args
    if (!namespaceID) {
      console.error('recordRead failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!moduleID) {
      console.error('recordRead failed, field moduleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field moduleID is empty')
    }
    if (!recordID) {
      console.error('recordRead failed, field recordID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field recordID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.recordReadEndpoint({
        namespaceID,
        moduleID,
        recordID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  recordReadEndpoint ({namespaceID, moduleID, recordID, } = {}) {
    return `/namespace/${namespaceID}/module/${moduleID}/record/${recordID}`
  }

  // Update records in module section
  async recordUpdate (args = {}) {
    const {namespaceID, moduleID, recordID, values, } = args
    if (!namespaceID) {
      console.error('recordUpdate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!moduleID) {
      console.error('recordUpdate failed, field moduleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field moduleID is empty')
    }
    if (!recordID) {
      console.error('recordUpdate failed, field recordID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field recordID is empty')
    }
    if (!values) {
      console.error('recordUpdate failed, field values is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field values is empty')
    }

    let cfg = {
      method: 'post',
      url: this.recordUpdateEndpoint({
        namespaceID,
        moduleID,
        recordID,
      }),
    }

    cfg.data = {
      values,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  recordUpdateEndpoint ({namespaceID, moduleID, recordID, } = {}) {
    return `/namespace/${namespaceID}/module/${moduleID}/record/${recordID}`
  }

  // Delete record row from module section
  async recordDelete (args = {}) {
    const {namespaceID, moduleID, recordID, } = args
    if (!namespaceID) {
      console.error('recordDelete failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!moduleID) {
      console.error('recordDelete failed, field moduleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field moduleID is empty')
    }
    if (!recordID) {
      console.error('recordDelete failed, field recordID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field recordID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.recordDeleteEndpoint({
        namespaceID,
        moduleID,
        recordID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  recordDeleteEndpoint ({namespaceID, moduleID, recordID, } = {}) {
    return `/namespace/${namespaceID}/module/${moduleID}/record/${recordID}`
  }

  // Trigger a specific script on record
  async recordRunScript (args = {}) {
    const {namespaceID, moduleID, recordID, scriptID, } = args
    if (!namespaceID) {
      console.error('recordRunScript failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!moduleID) {
      console.error('recordRunScript failed, field moduleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field moduleID is empty')
    }
    if (!scriptID) {
      console.error('recordRunScript failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }

    let cfg = {
      method: 'post',
      url: this.recordRunScriptEndpoint({
        namespaceID,
        moduleID,
      }),
    }

    cfg.data = {
      recordID,
      scriptID,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  recordRunScriptEndpoint ({namespaceID, moduleID, } = {}) {
    return `/namespace/${namespaceID}/module/${moduleID}/record/run-script`
  }

  // Uploads attachment and validates it against record field requirements
  async recordUpload (args = {}) {
    const {namespaceID, moduleID, recordID, fieldName, upload, } = args
    if (!namespaceID) {
      console.error('recordUpload failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!moduleID) {
      console.error('recordUpload failed, field moduleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field moduleID is empty')
    }
    if (!fieldName) {
      console.error('recordUpload failed, field fieldName is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field fieldName is empty')
    }
    if (!upload) {
      console.error('recordUpload failed, field upload is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field upload is empty')
    }

    let cfg = {
      method: 'post',
      url: this.recordUploadEndpoint({
        namespaceID,
        moduleID,
      }),
    }

    cfg.data = {
      recordID,
      fieldName,
      upload,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  recordUploadEndpoint ({namespaceID, moduleID, } = {}) {
    return `/namespace/${namespaceID}/module/${moduleID}/record/attachment`
  }

  // List/read charts
  async chartList (args = {}) {
    const {namespaceID, query, page, perPage, } = args
    if (!namespaceID) {
      console.error('chartList failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.chartListEndpoint({
        namespaceID,
      }),
    }
    cfg.params = {
      query,
      page,
      perPage,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  chartListEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}/chart/`
  }

  // List/read charts
  async chartCreate (args = {}) {
    const {namespaceID, config, name, } = args
    if (!namespaceID) {
      console.error('chartCreate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!config) {
      console.error('chartCreate failed, field config is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field config is empty')
    }
    if (!name) {
      console.error('chartCreate failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }

    let cfg = {
      method: 'post',
      url: this.chartCreateEndpoint({
        namespaceID,
      }),
    }

    cfg.data = {
      config,
      name,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  chartCreateEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}/chart/`
  }

  // Read charts by ID
  async chartRead (args = {}) {
    const {namespaceID, chartID, } = args
    if (!namespaceID) {
      console.error('chartRead failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!chartID) {
      console.error('chartRead failed, field chartID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field chartID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.chartReadEndpoint({
        namespaceID,
        chartID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  chartReadEndpoint ({namespaceID, chartID, } = {}) {
    return `/namespace/${namespaceID}/chart/${chartID}`
  }

  // Add/update charts
  async chartUpdate (args = {}) {
    const {namespaceID, chartID, config, name, updatedAt, } = args
    if (!namespaceID) {
      console.error('chartUpdate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!chartID) {
      console.error('chartUpdate failed, field chartID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field chartID is empty')
    }
    if (!config) {
      console.error('chartUpdate failed, field config is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field config is empty')
    }
    if (!name) {
      console.error('chartUpdate failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }

    let cfg = {
      method: 'post',
      url: this.chartUpdateEndpoint({
        namespaceID,
        chartID,
      }),
    }

    cfg.data = {
      config,
      name,
      updatedAt,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  chartUpdateEndpoint ({namespaceID, chartID, } = {}) {
    return `/namespace/${namespaceID}/chart/${chartID}`
  }

  // Delete chart
  async chartDelete (args = {}) {
    const {namespaceID, chartID, } = args
    if (!namespaceID) {
      console.error('chartDelete failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!chartID) {
      console.error('chartDelete failed, field chartID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field chartID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.chartDeleteEndpoint({
        namespaceID,
        chartID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  chartDeleteEndpoint ({namespaceID, chartID, } = {}) {
    return `/namespace/${namespaceID}/chart/${chartID}`
  }

  // Send email from the Compose
  async notificationEmailSend (args = {}) {
    const {to, cc, replyTo, subject, content, } = args
    if (!to) {
      console.error('notificationEmailSend failed, field to is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field to is empty')
    }
    if (!content) {
      console.error('notificationEmailSend failed, field content is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field content is empty')
    }

    let cfg = {
      method: 'post',
      url: this.notificationEmailSendEndpoint({  }),
    }

    cfg.data = {
      to,
      cc,
      replyTo,
      subject,
      content,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  notificationEmailSendEndpoint () {
    return `/notification/email`
  }

  // List, filter all page attachments
  async attachmentList (args = {}) {
    const {kind, namespaceID, sign, userID, pageID, moduleID, recordID, fieldName, page, perPage, } = args
    if (!kind) {
      console.error('attachmentList failed, field kind is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field kind is empty')
    }
    if (!namespaceID) {
      console.error('attachmentList failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.attachmentListEndpoint({
        kind,
        namespaceID,
      }),
    }
    cfg.params = {
      sign,
      userID,
      pageID,
      moduleID,
      recordID,
      fieldName,
      page,
      perPage,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  attachmentListEndpoint ({kind, namespaceID, } = {}) {
    return `/namespace/${namespaceID}/attachment/${kind}/`
  }

  // Attachment details
  async attachmentRead (args = {}) {
    const {kind, namespaceID, attachmentID, sign, userID, } = args
    if (!kind) {
      console.error('attachmentRead failed, field kind is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field kind is empty')
    }
    if (!namespaceID) {
      console.error('attachmentRead failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!attachmentID) {
      console.error('attachmentRead failed, field attachmentID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field attachmentID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.attachmentReadEndpoint({
        kind,
        namespaceID,
        attachmentID,
      }),
    }
    cfg.params = {
      sign,
      userID,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  attachmentReadEndpoint ({kind, namespaceID, attachmentID, } = {}) {
    return `/namespace/${namespaceID}/attachment/${kind}/${attachmentID}`
  }

  // Delete attachment
  async attachmentDelete (args = {}) {
    const {kind, namespaceID, attachmentID, sign, userID, } = args
    if (!kind) {
      console.error('attachmentDelete failed, field kind is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field kind is empty')
    }
    if (!namespaceID) {
      console.error('attachmentDelete failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!attachmentID) {
      console.error('attachmentDelete failed, field attachmentID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field attachmentID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.attachmentDeleteEndpoint({
        kind,
        namespaceID,
        attachmentID,
      }),
    }
    cfg.params = {
      sign,
      userID,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  attachmentDeleteEndpoint ({kind, namespaceID, attachmentID, } = {}) {
    return `/namespace/${namespaceID}/attachment/${kind}/${attachmentID}`
  }

  // Serves attached file
  async attachmentOriginal (args = {}) {
    const {kind, namespaceID, attachmentID, name, sign, userID, download, } = args
    if (!kind) {
      console.error('attachmentOriginal failed, field kind is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field kind is empty')
    }
    if (!namespaceID) {
      console.error('attachmentOriginal failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!attachmentID) {
      console.error('attachmentOriginal failed, field attachmentID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field attachmentID is empty')
    }
    if (!name) {
      console.error('attachmentOriginal failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }

    let cfg = {
      method: 'get',
      url: this.attachmentOriginalEndpoint({
        kind,
        namespaceID,
        attachmentID,
        name,
      }),
    }
    cfg.params = {
      sign,
      userID,
      download,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  attachmentOriginalEndpoint ({kind, namespaceID, attachmentID, name, } = {}) {
    return `/namespace/${namespaceID}/attachment/${kind}/${attachmentID}/original/${name}`
  }

  // Serves preview of an attached file
  async attachmentPreview (args = {}) {
    const {kind, namespaceID, attachmentID, ext, sign, userID, } = args
    if (!kind) {
      console.error('attachmentPreview failed, field kind is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field kind is empty')
    }
    if (!namespaceID) {
      console.error('attachmentPreview failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!attachmentID) {
      console.error('attachmentPreview failed, field attachmentID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field attachmentID is empty')
    }
    if (!ext) {
      console.error('attachmentPreview failed, field ext is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field ext is empty')
    }

    let cfg = {
      method: 'get',
      url: this.attachmentPreviewEndpoint({
        kind,
        namespaceID,
        attachmentID,
        ext,
      }),
    }
    cfg.params = {
      sign,
      userID,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  attachmentPreviewEndpoint ({kind, namespaceID, attachmentID, ext, } = {}) {
    return `/namespace/${namespaceID}/attachment/${kind}/${attachmentID}/preview.${ext}`
  }

  // Retrieve defined permissions
  async permissionsList (args = {}) {



    let cfg = {
      method: 'get',
      url: this.permissionsListEndpoint({  }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  permissionsListEndpoint () {
    return `/permissions/`
  }

  // Effective rules for current user
  async permissionsEffective (args = {}) {
    const {resource, } = args


    let cfg = {
      method: 'get',
      url: this.permissionsEffectiveEndpoint({  }),
    }
    cfg.params = {
      resource,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  permissionsEffectiveEndpoint () {
    return `/permissions/effective`
  }

  // Retrieve role permissions
  async permissionsRead (args = {}) {
    const {roleID, } = args
    if (!roleID) {
      console.error('permissionsRead failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.permissionsReadEndpoint({
        roleID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  permissionsReadEndpoint ({roleID, } = {}) {
    return `/permissions/${roleID}/rules`
  }

  // Remove all defined role permissions
  async permissionsDelete (args = {}) {
    const {roleID, } = args
    if (!roleID) {
      console.error('permissionsDelete failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.permissionsDeleteEndpoint({
        roleID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  permissionsDeleteEndpoint ({roleID, } = {}) {
    return `/permissions/${roleID}/rules`
  }

  // Update permission settings
  async permissionsUpdate (args = {}) {
    const {roleID, rules, } = args
    if (!roleID) {
      console.error('permissionsUpdate failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }
    if (!rules) {
      console.error('permissionsUpdate failed, field rules is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field rules is empty')
    }

    let cfg = {
      method: 'patch',
      url: this.permissionsUpdateEndpoint({
        roleID,
      }),
    }

    cfg.data = {
      rules,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  permissionsUpdateEndpoint ({roleID, } = {}) {
    return `/permissions/${roleID}/rules`
  }

  // List/read automation script
  async automationScriptList (args = {}) {
    const {namespaceID, query, resource, incDeleted, page, perPage, } = args
    if (!namespaceID) {
      console.error('automationScriptList failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.automationScriptListEndpoint({
        namespaceID,
      }),
    }
    cfg.params = {
      query,
      resource,
      incDeleted,
      page,
      perPage,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptListEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}/automation/script/`
  }

  // Add new automation script
  async automationScriptCreate (args = {}) {
    const {namespaceID, name, sourceRef, source, runAs, runInUA, timeout, critical, async, enabled, triggers, } = args
    if (!namespaceID) {
      console.error('automationScriptCreate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }

    let cfg = {
      method: 'post',
      url: this.automationScriptCreateEndpoint({
        namespaceID,
      }),
    }

    cfg.data = {
      name,
      sourceRef,
      source,
      runAs,
      runInUA,
      timeout,
      critical,
      async,
      enabled,
      triggers,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptCreateEndpoint ({namespaceID, } = {}) {
    return `/namespace/${namespaceID}/automation/script/`
  }

  // Read automation script by ID
  async automationScriptRead (args = {}) {
    const {namespaceID, scriptID, } = args
    if (!namespaceID) {
      console.error('automationScriptRead failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!scriptID) {
      console.error('automationScriptRead failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.automationScriptReadEndpoint({
        namespaceID,
        scriptID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptReadEndpoint ({namespaceID, scriptID, } = {}) {
    return `/namespace/${namespaceID}/automation/script/${scriptID}`
  }

  // Update automation script
  async automationScriptUpdate (args = {}) {
    const {namespaceID, scriptID, name, sourceRef, source, runAs, runInUA, timeout, critical, async, enabled, triggers, } = args
    if (!namespaceID) {
      console.error('automationScriptUpdate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!scriptID) {
      console.error('automationScriptUpdate failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }

    let cfg = {
      method: 'post',
      url: this.automationScriptUpdateEndpoint({
        namespaceID,
        scriptID,
      }),
    }

    cfg.data = {
      name,
      sourceRef,
      source,
      runAs,
      runInUA,
      timeout,
      critical,
      async,
      enabled,
      triggers,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptUpdateEndpoint ({namespaceID, scriptID, } = {}) {
    return `/namespace/${namespaceID}/automation/script/${scriptID}`
  }

  // Delete script
  async automationScriptDelete (args = {}) {
    const {namespaceID, scriptID, } = args
    if (!namespaceID) {
      console.error('automationScriptDelete failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!scriptID) {
      console.error('automationScriptDelete failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.automationScriptDeleteEndpoint({
        namespaceID,
        scriptID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptDeleteEndpoint ({namespaceID, scriptID, } = {}) {
    return `/namespace/${namespaceID}/automation/script/${scriptID}`
  }

  // List/read automation script triggers
  async automationTriggerList (args = {}) {
    const {namespaceID, scriptID, resource, event, incDeleted, page, perPage, } = args
    if (!namespaceID) {
      console.error('automationTriggerList failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!scriptID) {
      console.error('automationTriggerList failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.automationTriggerListEndpoint({
        namespaceID,
        scriptID,
      }),
    }
    cfg.params = {
      resource,
      event,
      incDeleted,
      page,
      perPage,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationTriggerListEndpoint ({namespaceID, scriptID, } = {}) {
    return `/namespace/${namespaceID}/automation/script/${scriptID}/trigger/`
  }

  // Add new automation script trigger
  async automationTriggerCreate (args = {}) {
    const {namespaceID, scriptID, resource, event, condition, enabled, } = args
    if (!namespaceID) {
      console.error('automationTriggerCreate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!scriptID) {
      console.error('automationTriggerCreate failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }
    if (!resource) {
      console.error('automationTriggerCreate failed, field resource is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field resource is empty')
    }
    if (!event) {
      console.error('automationTriggerCreate failed, field event is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field event is empty')
    }

    let cfg = {
      method: 'post',
      url: this.automationTriggerCreateEndpoint({
        namespaceID,
        scriptID,
      }),
    }

    cfg.data = {
      resource,
      event,
      condition,
      enabled,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationTriggerCreateEndpoint ({namespaceID, scriptID, } = {}) {
    return `/namespace/${namespaceID}/automation/script/${scriptID}/trigger/`
  }

  // Read automation script trigger by ID
  async automationTriggerRead (args = {}) {
    const {namespaceID, scriptID, triggerID, } = args
    if (!namespaceID) {
      console.error('automationTriggerRead failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!scriptID) {
      console.error('automationTriggerRead failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }
    if (!triggerID) {
      console.error('automationTriggerRead failed, field triggerID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field triggerID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.automationTriggerReadEndpoint({
        namespaceID,
        scriptID,
        triggerID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationTriggerReadEndpoint ({namespaceID, scriptID, triggerID, } = {}) {
    return `/namespace/${namespaceID}/automation/script/${scriptID}/trigger/${triggerID}`
  }

  // Update automation script trigger
  async automationTriggerUpdate (args = {}) {
    const {namespaceID, scriptID, triggerID, resource, event, condition, enabled, } = args
    if (!namespaceID) {
      console.error('automationTriggerUpdate failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!scriptID) {
      console.error('automationTriggerUpdate failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }
    if (!triggerID) {
      console.error('automationTriggerUpdate failed, field triggerID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field triggerID is empty')
    }
    if (!resource) {
      console.error('automationTriggerUpdate failed, field resource is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field resource is empty')
    }
    if (!event) {
      console.error('automationTriggerUpdate failed, field event is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field event is empty')
    }

    let cfg = {
      method: 'post',
      url: this.automationTriggerUpdateEndpoint({
        namespaceID,
        scriptID,
        triggerID,
      }),
    }

    cfg.data = {
      resource,
      event,
      condition,
      enabled,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationTriggerUpdateEndpoint ({namespaceID, scriptID, triggerID, } = {}) {
    return `/namespace/${namespaceID}/automation/script/${scriptID}/trigger/${triggerID}`
  }

  // Delete script
  async automationTriggerDelete (args = {}) {
    const {namespaceID, scriptID, triggerID, } = args
    if (!namespaceID) {
      console.error('automationTriggerDelete failed, field namespaceID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field namespaceID is empty')
    }
    if (!scriptID) {
      console.error('automationTriggerDelete failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }
    if (!triggerID) {
      console.error('automationTriggerDelete failed, field triggerID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field triggerID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.automationTriggerDeleteEndpoint({
        namespaceID,
        scriptID,
        triggerID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationTriggerDeleteEndpoint ({namespaceID, scriptID, triggerID, } = {}) {
    return `/namespace/${namespaceID}/automation/script/${scriptID}/trigger/${triggerID}`
  }

}
