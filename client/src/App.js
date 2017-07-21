import React, { Component } from 'react';
import InvoiceList from './components/invoicelist/invoicelist';
import Masthead    from './components/masthead/masthead';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Masthead />
        <InvoiceList />
      </div>
    );
  }
}

export default App;
