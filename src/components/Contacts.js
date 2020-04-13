import React from 'react';
import NewForm from './NewForm'
import Contact from './Contact'

let baseURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  //Would change to heroku backend
  baseURL = 'http://localhost:3000'
}

class Contacts extends React.Component{
  constructor(){
    super()
    this.state = {
      contacts: []
    }
    this.handleAddContact = this.handleAddContact.bind(this)
    this.handleUpdateContact = this.handleUpdateContact.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }


  async handleAddContact(contact){
      try{
        let response = await fetch(`${baseURL}/contacts`, {
          body: JSON.stringify(contact),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        let data = await response.json()
        console.log(data);
        let copyContacts = [data.contact, ...this.state.contacts]
        this.setState({
          contacts: copyContacts,
          name: '',
          city: '',
          state: '',
          country: '',
          birthday: '',
          bio: '',
          phone: '',
          email: '',
          artwork: ''
        })
      } catch(e){
        console.log(e);
      }
    }

    async fetchContacts(){
      try{
        let response = await fetch(`${baseURL}/contacts`)
        let data = await response.json()
        this.setState({contacts: data.contacts})
      } catch(e) {
        console.log(e);
      }
    }

    async handleUpdateContact(e, contact){
      e.preventDefault()
      console.log(contact);
      try{
        let response = await fetch(`${baseURL}/contacts/${contact.id}`, {
          body: JSON.stringify(contact),
          method: 'PUT',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        })
        let responseJson = await response.json()
        let updatedContact = responseJson.contact
        console.log(updatedContact);
        const foundContactIndex = this.state.contacts.findIndex(foundContact => foundContact.id === contact.id)
        const copyContacts = [...this.state.contacts]
        copyContacts[foundContactIndex] = updatedContact
        this.setState({
          contacts: copyContacts
        })
      } catch(e){
        console.log(e);
      }
    }

    async deleteContact(contact){
      try{
        let response = await fetch(`${baseURL}/contacts/${contact.id}`, {
          method: 'DELETE'
        })
      //  let data = await response.json()
        const foundContact = this.state.contacts.findIndex(c => c.id === contact.id)
        const copyContacts = [...this.state.contacts]
        copyContacts.splice(foundContact, 1)
        this.setState({contacts: copyContacts})
      } catch(e){
        console.log(e);
      }
    }

    componentDidMount(){
      this.fetchContacts()
    }

    render(){
      return(
        <div className="container">
            <Contact contacts={this.filterContacts()}  handleUpdateContact={this.handleUpdateContact} deleteContact={this.deleteContact}
            handleAddContact={this.handleAddContact}/>
        </div>
      )
    }

    filterContacts () {
      return this.state.contacts.filter(c => c.name.toLowerCase().includes(this.props.searchText.toLowerCase()))
    }
  }

  export default Contacts
