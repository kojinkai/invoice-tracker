import React, { Component } from 'react';
import TextInput from '../textinput/textinput';
import Button from '../button/button';
import './invoiceform.css';

class InvoiceRecipientForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value  = target.value;
    const name   = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.props.formData);
  }

  render() {
    return (
      <form className="invoice-form" onSubmit={this.handleSubmit}>
        <TextInput onChange={this.handleInputChange} value={this.state.name} id="invoice__input-name" placeholder="enter name" label="name" name="name" display="oneline" />
        <TextInput onChange={this.handleInputChange} value={this.state.surname} id="invoice__input-surname" placeholder="enter surname" label="surname" name="surname" display="oneline" />
        <TextInput onChange={this.handleInputChange} value={this.state.address} id="invoice__input-address" placeholder="enter address" label="address" name="address" display="oneline" />
        <TextInput onChange={this.handleInputChange} value={this.state.phone} id="invoice__input-phone" placeholder="enter phone" label="phone number" name="phone" display="oneline" />

        <div className="invoice-form__actions">
          <input type="submit" value="Submit" className="invoice-form__submit-button" />
          <Button value="Cancel" onClick={this.props.onCancel} />
        </div>

      </form>
    );
  }
}

export default InvoiceRecipientForm;