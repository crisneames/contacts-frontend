import React from 'react'

class Footer extends React.Component {

  render() {
    return (
      <div className="container">
      <nav className="pagination">
        <a href="" className="pagination-previous" disabled>Previous</a>
        <a href="" className="pagination-next">Next page</a>
        <ul className= "pagination-list">
          <li>
            <a href="" className="pagination-link is-info">1</a>
          </li>
          <li>
            <a href="" className="pagination-link is-info">2</a>
          </li>
          <li>
            <a href="" className="pagination-link is-info">3</a>
          </li>
        </ul>
      </nav>
    </div>
    )
  }
}



export default Footer
