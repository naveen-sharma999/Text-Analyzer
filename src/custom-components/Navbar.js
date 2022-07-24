import React from 'react' 
import PropTypes from 'prop-types'
//import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        {props.title}
      </a>
      <div className="form-check form-switch mx-3 form-check-reverse">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" onClick={props.toggleMode} role="button"/>
          <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckReverse">{props.btnText}</label>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          {/*<li className="nav-item">
            <a className="nav-link" href="/">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              {props.about}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.contact}
            </a>
          </li>*/}
        </ul>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title : PropTypes.string,
                    about : PropTypes.string,
                    contact : PropTypes.string
}

Navbar.defaultProps = {
    title : 'Title ?',
    about : 'About',
    contact : 'Contact us'
};
