import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import HomeMain from "./screens/HomeMain"

const App = () => {
  return (
    <Router>
      {/* <Header /> */}

      <main className='main'>
        <Container>
          <Route path='/' component={HomeMain} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
