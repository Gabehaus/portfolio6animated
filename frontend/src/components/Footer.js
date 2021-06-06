import React, { Component } from "react"
import FBlogo from "../images/FBlogo.svg"

import TwitterLogo from "../images/TwitterLogo.svg"

import Image from "react-bootstrap/Image"
import axios from "axios"

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ""
    }
  }

  onChange = e => {
    this.setState({ email: e.target.value })
  }

  resetForm = () => {
    this.setState({
      email: ""
    })

    setTimeout(() => {
      this.setState({ sent: false })
    })
  }

  formSubmit = e => {
    e.preventDefault()

    let data = {
      email: this.state.email
    }

    axios
      .post("/api/form/", data)
      .then(res => {
        this.setState(
          {
            sent: true
          },
          this.resetForm()
        )
      })
      .catch(() => {
        console.log("message not sent")
      })
  }

  render() {
    return (
      <div className='grid-container'>
        <div className='connect'>
          <div className='stayConnected'>
            <h3 className='footerHeader'>STAY CONNECTED</h3>
            <p className='footer-basic-font'>
              Sign up for Lucid Media's monthly newsletter.
            </p>
          </div>
          <div className='emailAndIcons'>
            <form className='footerForm' onSubmit={this.formSubmit}>
              <input
                type='text'
                id='email2'
                name='email2'
                className='formInput'
                value={this.state.email}
                onChange={this.onChange}
              />
              <input type='submit' value='Submit' className='subButton' />
            </form>
            <div className='contactIcons'>
              <Image src={FBlogo} className='logo1' />
              <Image src={TwitterLogo} className='logo1' />
            </div>
          </div>
        </div>

        <div className='credits'>
          <h3 className='footerHeader'>SITE DESIGN</h3>
          <p style={{ color: "#9e92f7" }} className='footer-basic-font'>
            Site designed and coded (front-to-back) by{" "}
            <span style={{ color: "#9e92f7" }}>Gabriel Hauschildt</span>{" "}
          </p>

          <br />
          <br />
          <a
            href='mailto:Gabehaus@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-basic-font'
          >
            Email
          </a>
        </div>

        <div className='navigate'>
          <div>
            <h3 className='footerHeader'>NAVIGATE</h3>
            <ul className='navLnx'>
              <li>
                <a href='/#work'>Work</a>
              </li>
              <li>
                <a href='/#skills'>Skills</a>
              </li>
              <li>
                <a href='/#contact'>Resume</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='footerHeader'>EXTERNAL LINKS</h3>
            <ul className='exLnx'>
              <li>
                <a
                  href='https://ghcodingdiary.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Coding Diary
                </a>
              </li>
              <li>
                <a
                  href='https://fathackertest.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Fat Hacker App
                </a>
              </li>
              <li>
                <a
                  href='http://calteksolutions.com/shop'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Calteksolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='info'>
          <hr />
          <div
            className='address footer-basic-font'
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span className='lucidSpan footer-basic-font'>
              Lucid Media Group &#8226;
            </span>
            {"    "}
            &nbsp;7223 N. Knowles Ave, Portland, OR 97217 &#8226; (504)931.7553
          </div>
          <hr />
        </div>
        <div style={{ minHeight: "20vh" }} />
      </div>
    )
  }
}
