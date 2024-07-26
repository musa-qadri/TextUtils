import React from 'react'

export default function Navbar(props) {

  // console.log(input.value) 

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Content
                </a>
              </li>


            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light' }`}>
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggalMode}
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
