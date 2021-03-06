import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import HomeMain from "./screens/HomeMain"
import Header from "./components/Header"

const App = () => {
  return (
    <Router>
      <Header />

      <main className='main'>
        <Route path='/' component={HomeMain} exact />
      </main>
    </Router>
  )
}

export default App
