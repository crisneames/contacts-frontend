import React, { Component } from 'react';
import UpdateForm from './UpdateForm'
import NewForm from './NewForm'
import Card from './Card'

export default class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {

      showForm: false
    }
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm(){
    this.setState({showForm: !this.state.showForm})
  }

  render() {
    return (
<>
{this.state.showForm  ?
    <NewForm toggleForm={this.toggleForm} handleAddContact={this.props.handleAddContact}/> :
      <button onClick={this.toggleForm} className="button is-outlined is-info">Add New Contact</button>

 }
<div className="flex-container">


        {this.props.contacts.map(( contact)=> (
        <Card contact={contact} handleUpdateContact={this.props.handleUpdateContact}deleteContact={this.props.deleteContact}/>


      ))


      }
</div>
</>
    );
  }
};
