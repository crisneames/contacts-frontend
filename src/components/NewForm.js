import React from 'react'

class NewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        city: '',
        state: '',
        country: '',
        birthday: '',
        bio: '',
        phone: '',
        email: '',
        artwork: 'http://'
    }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)

}

  handleChange(event){
  this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleAddContact({ ... this.state })
    this.setState({
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
  }

  render() {
    return (
      <div style={{display: "block", width: "100vw"}} className="container modal">
        <div style={{width: "100vw"}} className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">Create Contact</p>
      <button className="delete" onClick={this.props.toggleForm} aria-label="close"></button>
    </header>
    <section className="modal-card-body">
      <form onSubmit={function (event){this.handleSubmit();this.props.toggleForm()}}>
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
            <input className= "input" placeholder="Picture" type='text'
              pattern="http[s]*://.+" value={this.state.artwork} onChange={this.handleChange} id='artwork' />
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
}

export default NewForm
