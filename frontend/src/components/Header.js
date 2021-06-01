import React from "react"
import { Route } from "react-router-dom"

import { LinkContainer } from "react-router-bootstrap"
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap"
import logo3 from "../images/logo3.png"
//#555eff #fa75d2  #21ffe5"
const Header = () => {
  return (
    <header>
      <Navbar style={{ background: "#0d0d0d" }} expand='lg'>
        <Navbar.Brand href='#home'>
          {" "}
          <img
            alt=''
            src={logo3}
            width={
              window.innerWidth > 1100
                ? "250"
                : window.innerWidth > 760
                ? "150"
                : "110"
            }
            className='d-inline-block align-top'
            style={{ marginLeft: "6vw" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <div className='navLink-wrapper'>
              <Nav.Link
                href='#work'
                class='lin'
                style={{
                  color: "#5c21ff",
                  fontSize: "180"
                }}
              >
                Work
              </Nav.Link>
              <Nav.Link href='#skills' class='lin' style={{ color: "#5c21ff" }}>
                Skills
              </Nav.Link>
              <Nav.Link
                href='#contact'
                class='lin'
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
