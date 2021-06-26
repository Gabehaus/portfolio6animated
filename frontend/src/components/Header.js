import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

import { Navbar, Nav } from "react-bootstrap"
import HeaderLink from "./HeaderLink.js"
import logo3 from "../images/logo3.png"
//#555eff #fa75d2  #21ffe5"
const Header = () => {
  const linkBar0Ref = useRef(null)
  const linkBarRef = useRef(null)
  const linkWordRef = useRef(null)
  const linkTween = useRef(null)
  const linkBarTween0 = useRef(null)
  const linkBarTween = useRef(null)

  useEffect(() => {
    linkTween.current = gsap.to(linkWordRef.current, {
      color: "#2181ff",
      duration: 0.1,

      paused: true
    })

    linkBarTween0.current = gsap.to(linkBar0Ref.current, {
      opacity: 1,

      paused: true,
      duration: 1
    })

    linkBarTween.current = gsap.to(linkBarRef.current, {
      x: "150",

      duration: 0.8,
      paused: true
    })
  }, [])

  const onMouseEnterHandler = () => {
    linkTween.current.play()
    linkBarTween0.current.play()
    linkBarTween.current.play()
  }
  const onMouseLeaveHandler = () => {
    linkBarTween.current.reverse()
    linkBarTween0.current.reverse()
    linkTween.current.reverse()
  }

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
              <HeaderLink name='Work' />
              <HeaderLink name='Skills' />
              <HeaderLink name='Resume' />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
