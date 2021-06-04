import React, { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Button, Image } from "react-bootstrap"
import { uuid } from "uuidv4"
import { data } from "../data"

const AppImages = ({ images }) => {
  const len = images.length

  return (
    <Col
      className='app-image-wrapper'
      //   style={{
      //     margin: "auto",
      //     border: "none 2px blue",
      //     maxWidth: "70vw",
      //     marginTop: "7vh"
      //   }}
    >
      {/* <Row
        className='justify-content-center'
        style={{ border: "none 2px pink" }}
      > */}

      {data.properties.map((project, index) => (
        <React.Fragment>
          <Col
            md={5}
            style={{ border: "none 2px white" }}
            className='mt-5 mb-3'
          >
            <Image src={images[index]} className='mb-5 computer-image'></Image>
          </Col>
          <Col md={5} style={{ border: "none 2px grey" }} className='mt-5 mb-3'>
            <Row>
              <Col className='project-name'>{project.name}</Col>
            </Row>
            <Row>
              <Col className='project-description px-3 mt-2'>
                {project.description}
              </Col>
            </Row>
            <Row>
              <Col className='mt-3 project-tech px-3'>{project.note1}</Col>
            </Row>
            <Row
              className={
                window.innerWidth < 800 ? "justify-content-center" : null
              }
            >
              <Col xs={5} className='mt-3' style={{ position: "relative" }}>
                <a
                  href={project.diary}
                  target='_blank'
                  className='button-anchor'
                >
                  <button className='about-button'>About</button>
                </a>
              </Col>
              <Col xs={5} className='mt-3' style={{ position: "relative" }}>
                <a href={project.app} target='_blank' className='button-anchor'>
                  <button className='visit-button'>Visit Site</button>
                </a>
              </Col>
            </Row>
          </Col>
        </React.Fragment>
      ))}
      {/* </Row> */}
    </Col>
  )
}

export default AppImages
