import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  // console.log(input.value) 

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" to="/">
                  Content
                </a>
              </li>

            
            </ul>
            <button className=' mx-1 bg-danger ' onClick={()=>{props.toggalMode('danger')}} style={{height:'20px', width:'20px', borderRadius:'10px'}}></button>
            <button className=' mx-1 bg-success 'onClick={()=>{props.toggalMode('success')}} style={{height:'20px', width:'20px', borderRadius:'10px'}}></button>
            <button className=' mx-1 bg-warning 'onClick={()=>{props.toggalMode('warning')}} style={{height:'20px', width:'20px', borderRadius:'10px'}}></button>
            <button className=' mx-1 bg-primary 'onClick={()=>{props.toggalMode('primary')}} style={{height:'20px', width:'20px', borderRadius:'10px'}}></button>

            <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light' }`}>
              <input
                className="form-check-input mx-1"
                type="checkbox"
                onClick={()=>{props.toggalMode(null)}}
                id="flexSwitchCheckChecked" 
                defaultChecked="on"
              />
              <label className="form-check-label " htmlFor="flexSwitchCheckChecked" >
                {props.btnMode}
              </label>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}
