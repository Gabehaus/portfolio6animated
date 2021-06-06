import React from "react"
// import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"

import { data } from "../data"

const AppImages = ({ images }) => {
  return (
    <Col
      lg={12}
      className='app-image-wrapper'
      //   style={{
      //     margin: "auto",
      //     border: "none 2px blue",
      //     maxWidth: "70vw",
      //     marginTop: "7vh"
      //   }}
    >
      {/* {images.map(img => (
          <Col>
            <img src={img}></img>
          </Col>
        ))} */}
      {data.properties.map((project, index) => (
        <Row
          className='justify-content-center app-box'
          style={{ border: "none 2px pink" }}
          key={project.name}
        >
          <Col
            md={5}
            style={{ border: "none 2px white" }}
            className='mt-5 mb-3'
          >
            <img
              src={images[index]}
              alt={project.name}
              className={project.className}
            ></img>
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
                  rel='noreferrer'
                  className='button-anchor'
                >
                  <button className='about-button'>About</button>
                </a>
              </Col>
              <Col xs={5} className='mt-3' style={{ position: "relative" }}>
                <a
                  href={project.app}
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
      ))}
    </Col>
  )
}

export default AppImages
