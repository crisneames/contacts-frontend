import React from 'react'

class Header extends React.Component {


    render() {
    return (

      <div className="container">
        <h1 className=" contacts title">SEIR Waverider Contacts</h1>

          <div className="level-right search">
            <div className="level-item">
              <div className="field">
                <p className="control">
                  <input type="text" className="input" id="search"
                    placeholder="Search name..." onChange={event => this.props.onSearch(event.target.value)}></input>
              </p>
              </div>
            </div>
          </div>
      </div>
)

  }
}

export default Header
