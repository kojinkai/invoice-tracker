import React, { Component } from 'react';
import InvoiceList from './components/invoicelist/invoicelist';
import Masthead    from './components/masthead/masthead';
import Footer    from './components/footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Masthead />
        <InvoiceList />
        <Footer />
      </div>
    );
  }
}

export default App;
