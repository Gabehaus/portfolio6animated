import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Navbar, Nav } from "react-bootstrap"

const HeaderLink = ({ name }) => {
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
      delay: 0.3,
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
    <Nav.Link
      href='#contact'
      className='lin'
      style={{ color: "#5c21ff" }}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      ref={linkWordRef}
    >
      {name}
      <div className='under-bar' ref={linkBar0Ref}>
        <div className='nested-bar' ref={linkBarRef}></div>
      </div>
    </Nav.Link>
  )
}

export default HeaderLink
