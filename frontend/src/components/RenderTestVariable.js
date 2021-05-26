import React from "react"

const RenderTestVariable = ({ testVar }) => {
  return (
    <div style={{ color: "blue" }}>
      You are storing the following value in your reducer: {testVar}
      <br />
      width: {window.innerWidth}
    </div>
  )
}

export default RenderTestVariable
