import React, { Component } from 'react';
import InvoiceList from './components/invoicelist/invoicelist';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InvoiceList />
      </div>
    );
  }
}

export default App;
