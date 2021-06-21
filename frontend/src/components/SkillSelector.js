import React from "react"

import BubbleChart from "./BubbleChart"

import BubbleChart1b from "./BubbleChart1b"

import BubbleChart1c from "./BubbleChart1c"

var _ = require("lodash")

const SkillSelector = ({ screen }) => {
  const rawdata4 = _.map(
    [90, 70, 50, 90, 90, 40, 90, 70, 55, 40, 40, 30, 30, 70, 55, 55, 70, 55],
    thing => {
      return {
        v: thing
      }
    }
  )

  return (
    <div id='circle-wrapper'>
      {screen === "Desktop" ? <BubbleChart useLabels data={rawdata4} /> : null}
      {screen === "Ipad" ? <BubbleChart1b useLabels data={rawdata4} /> : null}
      {screen === "Mobile" ? <BubbleChart1c useLabels data={rawdata4} /> : null}
    </div>
  )
}

export default SkillSelector
