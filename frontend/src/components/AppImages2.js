import React, { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Image } from "react-bootstrap"
import NANOGPNG from "../images/apps/NANOGPNG.png"

const AppImages2 = () => {
  return (
    <Col lg={12} className='app-image-wrapper'>
      <Row
        className='justify-content-center app-box'
        style={{ border: "none 2px pink" }}
      >
        <Col md={5} style={{ border: "none 2px white" }} className='mt-5 mb-3'>
          <img src={NANOGPNG} className='computer-image'></img>
        </Col>
        <Col md={5} style={{ border: "none 2px grey" }} className='mt-5 mb-3'>
          <Row>
            <Col className='project-name'>NANOG SITE UPGRADE</Col>
          </Row>
          <Row>
            <Col className='project-description px-3 mt-2'>
              Devized and executed a plan to scrape data from old versions of
              company site and format it for use on new site.
            </Col>
          </Row>
          <Row>
            <Col className='mt-3 project-tech px-3'>
              {" "}
              React - JSON - Git - RegEx
            </Col>
          </Row>
          <Row
            className={
              window.innerWidth < 800 ? "justify-content-center" : null
            }
          >
            <Col xs={5} className='mt-3' style={{ position: "relative" }}>
              <a
                href='https://www.nanog.org/'
                target='_blank'
                className='button-anchor'
              >
                <button className='about-button'>About</button>
              </a>
            </Col>
            <Col xs={5} className='mt-3' style={{ position: "relative" }}>
              <a
                href='https://www.nanog.org/'
                target='_blank'
                className='button-anchor'
              >
                <button className='visit-button'>Visit Site</button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default AppImages2
