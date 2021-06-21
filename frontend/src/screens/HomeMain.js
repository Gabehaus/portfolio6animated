import React, { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin.js"
import { RoughEase } from "gsap/dist/EasePack"
import Work from "../components/Work"
import Contact from "../components/Contact"
import ThreeD1 from "../components/ThreeD1"
import ThreeDIpad from "../components/ThreeDIpad"
import ThreeDmobile from "../components/ThreeDmobile"

import Skills from "../components/Skills"
import Footer from "../components/Footer"
import Aos from "aos"
import "aos/dist/aos.css"

import changeSkillSet from "../actions/skillSetActions"

import selfie from "../images/selfie.png"

const HomeMain = () => {
  const dispatch = useDispatch()
  const [screen, setScreen] = useState("")
  const skillReducer = useSelector(state => state.skill)
  const { skill } = skillReducer

  // //.range = number of circles
  // //_.random = circle size variance
  // const rawdata = _.map([90, 90, 90, 70, 70, 70, 50, 50, 30, 30], thing => {
  //   return {
  //     v: thing //_.random(80, 100)  [90, 90, 90, 70, 70, 70, 50, 50, 30, 30]  _.range(10)
  //   }
  // })

  useEffect(() => {
    Aos.init({
      duration: 2000
    }) // initialize animate on scroll
  }, [])

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(".hi-text", {
      clipPath: "inset(0% 0% 0%)",
      webkitClipPath: "inset(0% 0% 0%)",
      delay: 1,
      duration: 1
    })
      .to(
        ".i-build-text",
        {
          clipPath: "inset(0% 0% 0%)",
          webkitClipPath: "inset(0% 0% 0%)",

          duration: 1
        },
        "+=.6"
      )

      .to(
        ".small-text-animation-wrapper",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",

          duration: 1
        },
        "+=1"
      )
      .to(
        ".lin",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",

          duration: 1
        },
        "-=1.3"
      )
      .to(
        ".logo",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",

          duration: 1
        },
        "-=1.3"
      )
      .to(
        ".contact-button",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",

          duration: 0.3
        },
        "-=.9"
      )
      .to(
        " .selfie-wrapper-mobile",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
          // duration: 0.8
        },
        "-=1.3"
      )
      .to(
        ".selfie-wrapper",
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
          // duration: 0.8
        },
        "-=1"
      )
  })

  //set screen variable
  useEffect(() => {
    const screenSet = () => {
      if (window.innerWidth < 1400 && window.innerWidth > 800) {
        setScreen("Laptop")
        return
      }

      if (window.innerWidth < 800 && window.innerWidth > 580) {
        setScreen("Ipad")
        return
      }

      if (window.innerWidth < 580) {
        setScreen("Mobile")
        return
      }
    }

    window.addEventListener("resize", screenSet)

    screenSet()
  }, [])

  useEffect(() => {
    var a = ["Front-End", "UI / Design", "Back-End"]
    dispatch(changeSkillSet(a[0]))
  }, [dispatch])

  // const handleSubmit = (e, string) => {
  //   e.preventDefault()
  //   dispatch(addToTestReducer(string))
  // }

  return (
    <div
      style={{
        background: "#0d0d0d",
        minHeight: "90vh",
        minWidth: "100vw",
        maxWidth: "100vw !important"

        // border: "solid 2px pink"
      }}
    >
      <Row>
        <Col xxl={5} lg={6} md={6} sm={5} className='hi-box'>
          {/* beginning of rows */}
          {window.innerWidth < 800 ? null : (
            <Row className='bg-light'>
              <Col></Col>
            </Row>
          )}

          <Row className='bg-light'>
            <Col className='text'>
              {screen === "Mobile" ? (
                <div alt='' src={selfie} className='selfie-wrapper-mobile'>
                  {" "}
                  <ThreeDmobile />
                </div>
              ) : null}
              <p className='hi-text'>Hi, I'm Gabe</p>
            </Col>
          </Row>
          <Row className='bg-light'>
            <Col className={screen === "Mobile" ? "text" : "i-build-websites"}>
              <p className='i-build-text'>I build websites</p>
            </Col>
          </Row>
          <Row className='bg-light'>
            <Col className='small-text px-3'>
              <p className='small-text-animation-wrapper'>
                {" "}
                Node.js - React{screen === "Ipad" ? <br /> : null}
                {screen !== "Ipad" ? " -" : null} Javascript - Typescript{" "}
              </p>
              <a href='#contact'>
                {" "}
                <button
                  className='contact-button'
                  style={{ background: "red !important" }}
                >
                  Contact Me!
                </button>
              </a>
            </Col>
          </Row>
        </Col>

        <Col
          xxl={5}
          lg={3}
          md={3}
          sm={5}
          className='hi-box two'
          style={{ marginLeft: "0" }}
        >
          <Row className='bg-light'>
            <Col style={{ paddingTop: "0" }}>
              {// style={{ maxWidth: "100%", marginTop: "8vh" }}
              screen !== "Mobile" ? (
                <div
                  alt=''
                  className='selfie-wrapper'
                  style={{ background: "transparent" }}
                >
                  {" "}
                  {screen === "Ipad" ? <ThreeDIpad /> : <ThreeD1 />}
                </div>
              ) : null}
            </Col>
          </Row>
        </Col>
        {/* <Skills skill={skill} /> */}
      </Row>

      <Skills skill={skill} />

      <div
        style={{
          display: "inline-block !important"
        }}
        data-aos='fade-in'
      >
        {" "}
        <Contact />
      </div>
      <Work />

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomeMain
