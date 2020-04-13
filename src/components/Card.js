import React, { Component } from 'react';
import UpdateForm from './UpdateForm'
import NewForm from './NewForm'

export default class Card extends Component {
    constructor(props) {
      super(props)
      this.state = {
        shown: false
      }
      this.toggleForm = this.toggleForm.bind(this)
    }

      toggleForm(){
        this.setState({shown: !this.state.shown})
      }

      render() {
    return (

    <div className=" box person">
      <div className="box-content">
        <div className="media">
          <div className="media-left">
          <figure className="zoom image is-96x96">
            <img class="is-rounded" src={this.props.contact.artwork} />
          </figure>

            </div>
            <div className="media-content">
            <p className="title is-4">{this.props.contact.name}</p>
            <p className="subtitle is-7"> <i class="fas fa-birthday-cake"></i>   {this.props.contact.birthday}</p>
            <p className="content subtitle is-7"> <i class="fas fa-search-location"></i>   {this.props.contact.city} {this.props.contact.state} {this.props.contact.country}</p>
            </div>
    </div>
<div className="content">
<p></p>
  <p>{this.props.contact.bio}</p>
    <br />
    <p className=""> <i class="fas fa-phone"></i>  {this.props.contact.phone} <br /><i class="far fa-envelope"></i>  {this.props.contact.email}</p>
    <footer className="card-footer">

    <p className="card-footer-item" onClick={this.toggleForm}>Edit</p>
    <p className="card-footer-item" onClick={()=>this.props.deleteContact(this.props.contact)}>Delete</p>
      </footer>
      {this.state.shown ? <UpdateForm contact={this.props.contact} handleUpdateContact={this.props.handleUpdateContact} contact={this.props.contact}toggleForm={this.toggleForm} /> : null}
</div>
</div>
</div>



    )
  }


}
