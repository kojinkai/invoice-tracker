const API_BASE_URL = 'http://localhost:3001'
const RESOURCE     = 'invoices'

const invoiceApi = {
  postInvoices(data) {
    const postHeaders = new Headers()
    postHeaders.append('content-type', 'text/plain')
    const url = `${API_BASE_URL}/${RESOURCE}`

    const request = new Request(url, {
      method: 'POST',
      headers: postHeaders,
      body: JSON.stringify(data)
    })

    return fetch(request)
  }
}

export default invoiceApi
