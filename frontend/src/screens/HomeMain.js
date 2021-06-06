import React, { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import Work from "../components/Work"
import Contact from "../components/Contact"
import ThreeD1 from "../components/ThreeD1"
import ThreeDIpad from "../components/ThreeDIpad"
import ThreeDmobile from "../components/ThreeDmobile"
// import BubbleChart from "../components/BubbleChart"
import Skills from "../components/Skills"
import Footer from "../components/Footer"
import Aos from "aos"
import "aos/dist/aos.css"

import changeSkillSet from "../actions/skillSetActions"

import selfie from "../images/selfie.png"
// var _ = require("lodash")

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
      duration: 2000,
      disable: function() {
        var maxWidth = 800
        return window.innerWidth < maxWidth
      }
    }) // initialize animate on scroll
  }, [])

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

    function log(i) {
      dispatch(changeSkillSet(a[i]))

      if (i < a.length) {
        setTimeout(function() {
          i++
          log(i)
        }, 3000)
      } else {
        log(0)
      }
    }

    log(0)
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
              {//  style={{ maxWidth: "100%", marginTop: "8vh" }}
              screen === "Mobile" ? (
                <div alt='' src={selfie} className='selfie-wrapper-mobile'>
                  {" "}
                  <ThreeDmobile />
                </div>
              ) : null}
              <p className='hi-text'>
                Hi,
                {screen === "Ipad" ? null : null} I'm Gabe
              </p>
            </Col>
          </Row>
          <Row className='bg-light'>
            <Col className={screen === "Mobile" ? "text" : "i-build-websites"}>
              I build websites
            </Col>
          </Row>
          <Row className='bg-light'>
            <Col className='small-text px-3'>
              Node.js - React{screen === "Ipad" ? <br /> : null}
              {screen !== "Ipad" ? " -" : null} Javascript - Typescript
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

      {/* <form onSubmit={e => handleSubmit(e, testVariable)} className='curve-one'>
        <input onChange={e => setTestVariable(e.target.value)} />
        <button>Submit</button>
      </form>
      <RenderTestVariable testVar={testReducerItem} /> */}
      {/* <RenderTestVariable testVar={skill} /> */}
      <div
        style={{
          display: "inline-block !important"
        }}
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
