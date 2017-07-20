const API_BASE_URL = 'http://localhost:3001';
const RESOURCE     = 'invoices';

const invoiceApi = {
  postInvoice(data) {

    const url = `${API_BASE_URL}/${RESOURCE}`

    const request = new Request(url, {
      method: 'POST',
      body: data
    });

    return fetch(request);
  }
};

export default invoiceApi;