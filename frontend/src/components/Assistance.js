import React from "react"
// import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Image } from "react-bootstrap"
import NANOGPNG from "../images/apps/NANOGPNG.png"

const Assistance = () => {
  return (
    <div className='app-image-wrapper'>
      <Row
        className='justify-content-center'
        style={{ border: "none 2px white" }}
      >
        <Col md={5} style={{ border: "none 2px white" }} className='mt-1 mb-5'>
          <Image
            src={NANOGPNG}
            alt='NANOG SITE UPGRADE'
            className='computer-image2'
          ></Image>
        </Col>
        <Col md={5} className='mt-5 mb-5'>
          <Row>
            <Col className='project-name mt-1'>NANOG Site Upgrade</Col>
          </Row>
          <Row>
            <Col className='project-description px-3 mt-2'>
              Devized and executed a plan to scrape data from old versions of
              company site and format it for use on new site.
            </Col>
          </Row>
          <Row>
            <Col className='mt-3 project-tech px-3'>
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
                rel='noreferrer'
                className='button-anchor'
              >
                <button className='about-button'>About</button>
              </a>
            </Col>
            <Col xs={5} className='mt-3' style={{ position: "relative" }}>
              <a
                href='https://www.nanog.org/'
                target='_blank'
                rel='noreferrer'
                className='button-anchor'
              >
                <button className='visit-button'>Visit Site</button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Assistance
