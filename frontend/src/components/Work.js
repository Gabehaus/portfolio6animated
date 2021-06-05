import React, { useEffect, useState } from "react"

import { Row, Col } from "react-bootstrap"
import Aos from "aos"
import "aos/dist/aos.css"

import AppImages from "./AppImages"
import AppImages2 from "./AppImages2"
import Assistance from "./Assistance"
import calculatorPNG from "../images/apps/calculatorPNG.png"
import clockBPNG from "../images/apps/clockBPNG.png"
import drumPNG from "../images/apps/drumPNG.png"
import fathackPNG from "../images/apps/fathackPNG.png"
import markownPNG from "../images/apps/markownPNG.png"
import quotesBPNG from "../images/apps/quotesBPNG.png"
import CalTekPNG from "../images/apps/CalTekPNG.png"

const Work = () => {
  const slideImages = [
    fathackPNG,
    CalTekPNG,
    markownPNG,
    drumPNG,
    clockBPNG,
    calculatorPNG,
    quotesBPNG
  ]
  const [slideImagesPreloaded, setSlideImagesPreloaded] = useState([])

  useEffect(() => {
    Aos.init({
      duration: 2000,
      disable: function() {
        var maxWidth = 800
        return window.innerWidth < maxWidth
      }
    }) // initialize animate on scroll
  }, [])

  //load images
  useEffect(() => {
    slideImages.map(elem => {
      let newImage = (new Image().src = elem)
      //   slideImagesPreloaded.push((new Image().src = elem))
      setSlideImagesPreloaded(slideImagesPreloaded => [
        ...slideImagesPreloaded,
        newImage
      ])

      return "finished"
    })

    // setTimeout(() => {
    //   setFinished(true)
    // }, [10])
  }, [])

  return (
    <div
      style={{
        position: "relative",
        background: "#0d0d0d", //#9781ff
        minHeight: "90vh",
        border: "none 2px pink",
        maxWidth: "100vw",
        marginTop: window.innerWidth < 950 ? "-5px" : null
      }}
      id='work'
    >
      <Row>
        <Col className='work-title' style={{ color: "white" }}>
          Projects
        </Col>
      </Row>
      <Row>
        <h3
          className='project-desc1 text-center font-italic mt-3'
          style={{ color: "white" }}
        >
          Front to back coding and design
        </h3>
      </Row>
      <Row className='mb-5'>
        {/* {finished ? <AppImages images={slideImagesPreloaded} /> : null} */}
        {/* <div
          style={{
            maxWidth: "100vw",
            border: "solid 2px pink",
            minWidth: "100vw !important",
            marginLeft: "none"
          }}
        > */}
        <AppImages images={slideImagesPreloaded} />
        {/* </div> */}
        {/* {slideImagesPreloaded
          ? data.properties.map((project, index) => (
              <Col lg={6} md={6} sm={5} key={uuid()}>
                <img src={slideImagesPreloaded[index]}></img>
              </Col>
            ))
          : null} */}
        <Col lg={6} md={6} sm={5}>
          {/* {slideImagesPreloaded.length > 1 ? (
            <img src={slideImagesPreloaded[3]}></img>
          ) : null} */}
        </Col>
        <Col lg={6} md={6} sm={5}></Col>
      </Row>
      <Row>
        <Col className='work-title mt-5' style={{ color: "white" }}>
          Assistance
        </Col>
      </Row>
      <Row>
        <h3
          className='project-desc1 text-center font-italic mt-3'
          style={{ color: "white" }}
        >
          Assistance on client projects
        </h3>
      </Row>
      <Row>
        {/* {finished ? <AppImages images={slideImagesPreloaded} /> : null} */}
        {/* <div
          style={{
            maxWidth: "100vw",
            border: "solid 2px pink",
            minWidth: "100vw !important",
            marginLeft: "none"
          }}
        > */}
        <AppImages2 images={slideImagesPreloaded} />
        {/* </div> */}
        {/* {slideImagesPreloaded
          ? data.properties.map((project, index) => (
              <Col lg={6} md={6} sm={5} key={uuid()}>
                <img src={slideImagesPreloaded[index]}></img>
              </Col>
            ))
          : null} */}
        <Col lg={6} md={6} sm={5}>
          {/* {slideImagesPreloaded.length > 1 ? (
            <img src={slideImagesPreloaded[3]}></img>
          ) : null} */}
        </Col>
        <Col lg={6} md={6} sm={5}></Col>
      </Row>
    </div>
  )
}

export default Work
