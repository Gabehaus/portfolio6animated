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
    <div className='skills' id='skills' style={{ maxWidth: "100vw" }}>
      <Row className='justify-content-center no-gutters'>
        {screen !== "Mobile" ? (
          <Col
            lg={4}
            md={12}
            className='bubble-box'
            style={{
              border: "none 2px yellow"
            }}
          >
            <SkillSelector skillSet={chart} screen={screen} skill={skill} />
          </Col>
        ) : null}
        <Col lg={5} md={12} className='what-im-into'>
          <Col
            md={12}
            className='work-title2 mt-5'
            style={{ background: "transparent" }}
          >
            What I'm Into
          </Col>{" "}
          <Col
            md={12}
            className={screen !== "Desktop" ? "paragraph" : "paragraph"}
            style={{ background: "transparent" }}
          >
            From moving businesses online to building full-stack mobile apps, if
            you can dream it I can code it. I try to think of every project I
            work on as a coupling of art and technology. As Steve Jobs said,
            "it's technology married with liberal arts, married with the
            humanities, that yields us the results that make our heart sing."
          </Col>
          {screen === "Mobile" ? (
            <Col className='white-i-use-plus-skills'>
              <React.Fragment>
                <Col
                  md={12}
                  className='work-title3'
                  style={{
                    background: "transparent"
                  }}
                >
                  What I use
                </Col>
                <Col
                  md={12}
                  style={{
                    marginLeft: "0vw",
                    border: "none 2px yellow"
                  }}
                  className='mb-5'
                >
                  <SkillSelector
                    skillSet={chart}
                    screen={screen}
                    skill={skill}
                  />
                </Col>
              </React.Fragment>
            </Col>
          ) : null}
          <Col md={12} style={{ border: "none 1px pink" }}>
            {" "}
            <Link to={resume} target='_blank' download>
              <p className='resume-link-skills'>Download My Resume</p>
            </Link>
          </Col>
          <div style={{ minHeight: "2vw" }}></div>
        </Col>
      </Row>
    </div>
  )
}

export default Skills
