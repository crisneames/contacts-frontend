import React, { Component } from 'react';

export default class UpdateForm extends Component {
  constructor(props){
    super(props)
    this.state = {
        id: this.props.contact.id,
        name: this.props.contact.name,
        city: this.props.contact.city,
        state: this.props.contact.state,
        country: this.props.contact.country,
        birthday: this.props.contact.birthday,
        bio: this.props.contact.bio,
        phone: this.props.contact.phone,
        email: this.props.contact.email,
        artwork: this.props.contact.artwork
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
        })
  }

  componentDidMount(){
    if (this.props.contact) {
      this.setState({
        id: this.props.contact.id
      })
    }
  }

  render() {
    return(

        <div style={{display: "block", width: "100vw"}}className="container modal">
          <div style={{width: "100vw"}} className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Edit Contact</p>
        <button className="delete" onClick={this.props.toggleForm} aria-label="close"></button>
      </header>
      <section className="modal-card-body">
        <form onSubmit={(e)=> {this.props.handleUpdateContact(e, this.state); this.props.toggleForm()}}>



          <div className="field">
            <div className="control">
          <label className="label" htmlFor='name'>Name</label>
          <input className="input" placeholder="Name" type='text' value={this.state.name} onChange={this.handleChange} id='name' />
          </div>
          <br />

          <label className="label" htmlFor='city'>City</label>
          <input className="input" placeholder="City" type='text' value={this.state.city} onChange={this.handleChange} id='city' />
          <br />

          <label className="label" htmlFor='state'>State</label>
          <input className="input" placeholder="State" type='text' value={this.state.state} onChange={this.handleChange} id='state' />
          <br />

          <label className="label" htmlFor='country'>Country</label>
          <input className="input" placeholder="Country" type='text' value={this.state.country} onChange={this.handleChange} id='country' />
          <br />

          <label className="label" htmlFor='birthday'>Birthday</label>
          <input className="input" placeholder="Birthday" type='text'value={this.state.birthday} onChange={this.handleChange} id='birthday' />
          <br />

          <label className="label" htmlFor='bio'>Bio</label>
          <input className="input" placeholder="About You" type="textarea" className="textarea" value={this.state.bio} onChange={this.handleChange} id='bio' />
          <br />

          <label className="label" htmlFor='phone'>Phone</label>
          <input className="input" placeholder="Phone" type='text' value={this.state.phone} onChange={this.handleChange} id='phone' />
          <br />

          <label className="label" htmlFor='email'>Email</label>
          <input className= "input" placeholder="Email" type='text' value={this.state.email} onChange={this.handleChange} id='email' />
          <br />

          <label className="label" htmlFor='artwork'>Picture</label>
        <input className= "input" placeholder="artwork" type='text' pattern="http[s]*://.+" value={this.state.artwork} onChange={this.handleChange} id='artwork' />
          <br />

            <footer className="modal-card-foot">
          <button className="button is-info is-outlined" onClick={this.handleSubmit}>Save changes</button>
          <button className="button" onClick={this.props.toggleForm}>Cancel</button>
        </footer>
            </div>
            </form>
    </section>
  </div>
</div>


    )
  }
};
