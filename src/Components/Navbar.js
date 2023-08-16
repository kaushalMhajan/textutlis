import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode===`red`?`dark`:`light` && props.mode===`green`?`dark`:`light` && props.mode===`dark`?`dark`:`light`}  bg-${props.mode}`}  style={{background : props.mode===`red`?`#450c0c`:`#0b0051` && props.mode===`green`?`#1c560b`:`#0b0051`&& props.mode===`light`?`white`:`#0b0051`}}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link " aria-current="page" to="/">Home</Link> */}
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
          <a className="nav-link" href="#">{props.about}</a>
        </li>
      </ul>
      
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}

          <button type="button" onClick={props.togglegmode} className="btn btn-outline-success mx-2">GreenMode</button>
          <button type="button"  onClick={props.togglermode} className="btn btn-outline-danger mx-3">RedMode</button>

      <div className={`form-check form-switch text-${props.mode===`light`?`black`:`light`}`}>
        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>

  
  )
}

Navbar.propTypes = {

  title : PropTypes.string.isRequired,
  aboutText : PropTypes.string.isRequired 
}
Navbar.defaultProps = {
  title :"enter over here",
  aboutText : "enter anything"
}




