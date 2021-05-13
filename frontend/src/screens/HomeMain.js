import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Aos from "aos"
import "aos/dist/aos.css"
import addToTestReducer from "../actions/testActions"
import RenderTestVariable from "../components/RenderTestVariable"

const HomeMain = () => {
  const dispatch = useDispatch()

  const test = useSelector(state => state.test)
  const { testReducerItem } = test

  const [testVariable, setTestVariable] = useState(testReducerItem)

  useEffect(() => {
    Aos.init({
      duration: 2000,
      disable: function() {
        var maxWidth = 800
        return window.innerWidth < maxWidth
      }
    }) // initialize animate on scroll
  }, [])

  const handleSubmit = (e, string) => {
    e.preventDefault()
    dispatch(addToTestReducer(string))
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e, testVariable)}>
        <input onChange={e => setTestVariable(e.target.value)} />
        <button>Submit</button>
      </form>
      <RenderTestVariable testVar={testReducerItem} />
    </div>
  )
}

export default HomeMain
