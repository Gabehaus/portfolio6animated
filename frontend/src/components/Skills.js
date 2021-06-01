import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import resume from "../pdf/resume.pdf"

import SkillSelector from "./SkillSelector"
import Aos from "aos"
import "aos/dist/aos.css"

const Skills = ({ skill }) => {
  const chart = "languages"
  const [screen, setScreen] = useState("")

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
      if (window.innerWidth > 800) {
        setScreen("Desktop")
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

  return (
    <div className='skills' id='skills'>
      <Row className='justify-content-center no-gutters' style={{}}>
        <Col lg={4} md={12} className='what-im-into'>
          <Col
            md={12}
            className='work-title2'
            style={{ background: "transparent" }}
          >
            What I'm Into
          </Col>{" "}
          <Col
            md={12}
            className={
              screen !== "Desktop" ? "paragraph text-center" : "paragraph"
            }
            style={{ background: "transparent" }}
          >
            From moving businesses online to building full-stack mobile apps, if
            you can dream it I can code it. I try to think of every project I
            work on as a coupling of art and technology. As Steve Jobs said,
            "it's technology married with liberal arts, married with the
            humanities, that yields us the results that make our heart sing."
          </Col>
          <Col md={12} style={{ border: "none 1px pink" }}>
            {" "}
            <Link to={resume} target='_blank' download>
              <p className='resume-link-skills'>Download My Resume</p>
            </Link>
          </Col>
          <div style={{ minHeight: "2vw" }}></div>
        </Col>

        <Col
          lg={4}
          md={12}
          style={{
            marginLeft: screen === "Desktop" ? "5vw" : "0vw",
            border: "none 2px yellow"
          }}
        >
          <SkillSelector skillSet={chart} screen={screen} skill={skill} />
        </Col>
      </Row>

      {/* <Row>
            {skill == "Front-End" ? (
              <Col
                md={12}
                className='work-title2'
                data-aos={window.innerWidth > 800 ? "fade-in" : null}
                data-aos-easing='linear'
                data-aos-duration='600'
              >
                {skill}
              </Col>
            ) : null}
            {skill == "UI / Design" ? (
              <Col
                md={12}
                className='work-title2 '
                data-aos={window.innerWidth > 800 ? "fade-in" : null}
                data-aos-easing='linear'
                data-aos-duration='600'
              >
                {skill}
              </Col>
            ) : null}
            {skill == "Back-End" ? (
              <Col
                md={12}
                className='work-title2 '
                data-aos={window.innerWidth > 800 ? "fade-in" : null}
                data-aos-easing='linear'
                data-aos-duration='600'
              >
                {skill}
              </Col>
            ) : null}
          </Row> */}

      {/* <Form className='ml-5'>
        <div
          key={`inline-radio`}
          style={{
            marginLeft: "50%",
            transform: "translateX(-50%)",
            color: "white",
            justifyContent: "center",
            display: "flex"
          }}
        >
          <Form.Check
            inline
            label='Languages + FrontEnd Frameworks'
            name='group1'
            type='radio'
            id={`inline-radio-1`}
            value='languages'
            onChange={e => setChart(e.target.value)}
            defaultChecked
          />
          <Form.Check
            inline
            label='Back-End'
            name='group1'
            type='radio'
            id={`inline-radio-2`}
            value='front'
            onChange={e => setChart(e.target.value)}
          />
          <Form.Check
            inline
            label='Design Frameworks + Tools'
            name='group1'
            type='radio'
            id={`inline-radio-3`}
            value='back'
            onChange={e => setChart(e.target.value)}
          />
        </div>
      </Form> */}
    </div>
  )
}

export default Skills
