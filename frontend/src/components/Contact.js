import React, { useState } from "react"

import { Button, Form, Alert, Row, Col } from "react-bootstrap"

import axios from "axios"
import { Link } from "react-router-dom"
import resume from "../pdf/resume.pdf"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [sent, setSent] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    console.log("email", email)
    console.log("name", name)
    console.log("message", message)
    let data = {
      name: name,
      email: email,
      message: message
    }

    axios
      .post("/api/mail", data)
      .then(res => {
        setSent(true)
        resetForm()
      })
      .catch(() => {
        console.log("message not sent")
      })
  }

  const resetForm = () => {
    setName("")
    setEmail("")
    setMessage("")

    setTimeout(() => {
      setSent(null)
    }, 3000)
  }

  const updateEmail = e => {
    setEmail(e.target.value)
  }

  const updateName = e => {
    setName(e.target.value)
  }

  const updateMessage = e => {
    setMessage(e.target.value)
  }

  return (
    <div className='form-box' id='contact'>
      <Row>
        <Col className='work-title contact-title'>Contact</Col>
      </Row>
      <Form
        onSubmit={handleSubmit}
        style={{ color: "white", marginBottom: "2vw" }}
      >
        {sent ? <Alert color='success'>Email successfully sent!</Alert> : null}
        {sent === false ? <Alert color='danger'>Email not sent!</Alert> : null}
        <Row md={12} style={{ background: "#0d0d0d" }} className='px-0'>
          <Col lg={4}>
            {/* <Form.Label for='name'>Full Name</Form.Label> */}
            <input
              type='text'
              name='name'
              className='rounded-0 mr-0 input-name'
              id='name'
              value={name}
              onChange={updateName}
              placeholder='name'
            ></input>
          </Col>
          <Col lg={8}>
            {/* <Form.Label for='exampleEmail'>Email</Form.Label> */}
            <input
              type='email'
              name='email'
              className='rounded-0 ml-0 input-email'
              id='exampleEmail'
              value={email}
              onChange={updateEmail}
              placeholder='email'
            ></input>
          </Col>
        </Row>
        <Row md={12}>
          {/* <Form.Label for='message'>Message</Form.Label> */}
          <Col>
            <textarea
              type='textarea'
              name='message'
              className='rounded-0 mt-4 input-message'
              id='message'
              value={message}
              onChange={updateMessage}
              placeholder='message'
            ></textarea>
          </Col>
        </Row>
        <Button
          className='mt-3 submit-button'
          type='submit'
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
      <div>
        <Link
          to={resume}
          target='_blank'
          download
          style={{
            textDecoration: "underline",
            color: "#4621ff"
          }}
        >
          Download My Resume
        </Link>
      </div>
    </div>
  )
}
