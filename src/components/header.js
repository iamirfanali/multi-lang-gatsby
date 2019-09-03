import React from "react"
import Link from "gatsby-link"
import SelectLanguage from "./SelectLanguage"
import "bootstrap/dist/css/bootstrap.css"

const Header = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">
          Home <span className="sr-only">(current)</span>
        </a>
        <a className="nav-item nav-link" href="#">
          Features
        </a>
        <a className="nav-item nav-link" href="#">
          Pricing
        </a>
        <SelectLanguage langs={props.langs} />
      </div>
    </div>
  </nav>
  // <div
  //   style={{
  //     background: 'rebeccapurple',
  //     marginBottom: '1.45rem',
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: '0 auto',
  //       maxWidth: 960,
  //       padding: '1.45rem 1.0875rem',
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: 'white',
  //           textDecoration: 'none',
  //         }}
  //       >
  //         Gatsby
  //       </Link>
  //     </h1>
  //     <SelectLanguage langs={props.langs} />
  //   </div>
  // </div>
)

export default Header
