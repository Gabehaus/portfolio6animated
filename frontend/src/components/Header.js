import React from "react"

import { Navbar, Nav } from "react-bootstrap"
import logo3 from "../images/logo3.png"
//#555eff #fa75d2  #21ffe5"
const Header = () => {
  return (
    <header>
      <Navbar style={{ background: "#0d0d0d" }} expand='lg' variant='dark'>
        <Navbar.Brand href='#home' className='logo'>
          {" "}
          <img
            alt=''
            src={logo3}
            width={
              window.innerWidth > 1100
                ? "250"
                : window.innerWidth > 760
                ? "150"
                : "160"
            }
            className='d-inline-block align-top'
            style={{ marginLeft: "6vw" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='collapse'>
          <Nav className='mr-auto'>
            <div className='navLink-wrapper'>
              <Nav.Link
                href='#work'
                className='lin'
                style={{
                  color: "#5c21ff",
                  fontSize: "180"
                }}
              >
                Work
              </Nav.Link>
              <Nav.Link
                href='#skills'
                className='lin'
                style={{ color: "#5c21ff" }}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href='#contact'
                className='lin'
                style={{ color: "#5c21ff" }}
              >
                Resume
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
