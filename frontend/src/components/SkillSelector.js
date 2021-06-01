import React from "react"

import BubbleChart from "./BubbleChart"
import BubbleChart2 from "./BubbleChart2"
import BubbleChart3 from "./BubbleChart3"
import BubbleChart1b from "./BubbleChart1b"
import BubbleChart2b from "./BubbleChart2b"
import BubbleChart3b from "./BubbleChart3b"
import BubbleChart1c from "./BubbleChart1c"
import BubbleChart2c from "./BubbleChart2c"
import BubbleChart3c from "./BubbleChart3c"
var _ = require("lodash")

const SkillSelector = ({ skillSet, screen, skill }) => {
  //.range = number of circles
  //_.random = circle size variance

  const rawdata2 = _.map([90, 70, 50, 50, 50, 20, 20], thing => {
    return {
      v: thing //_.random(80, 100)  [90, 90, 90, 70, 70, 70, 50, 50, 30, 30]  _.range(10)
    }
  })

  const rawdata3 = _.map([90, 70, 50, 40, 40, 40, 20], thing => {
    return {
      v: thing //_.random(80, 100)  [90, 90, 90, 70, 70, 70, 50, 50, 30, 30]  _.range(10)
    }
  })

  const rawdata4 = _.map([20, 90, 50, 70, 50, 50, 20], thing => {
    return {
      v: thing //_.random(80, 100)  [90, 90, 90, 70, 70, 70, 50, 50, 30, 30]  _.range(10)
    }
  })

  return (
    <div className='circle-wrapper'>
      {screen === "Desktop" ? (
        skill === "Front-End" ? (
          <BubbleChart useLabels data={rawdata4} />
        ) : skill === "UI / Design" ? (
          <BubbleChart2 useLabels data={rawdata3} />
        ) : (
          <BubbleChart3 useLabels data={rawdata2} />
        )
      ) : null}
      {screen === "Ipad" ? (
        skill === "Front-End" ? (
          <BubbleChart1b useLabels data={rawdata2} />
        ) : skill === "UI / Design" ? (
          <BubbleChart2b useLabels data={rawdata3} />
        ) : (
          <BubbleChart3b useLabels data={rawdata2} />
        )
      ) : null}
      {screen === "Mobile" ? (
        skill === "Front-End" ? (
          <BubbleChart1c useLabels data={rawdata2} />
        ) : skill === "UI / Design" ? (
          <BubbleChart2c useLabels data={rawdata3} />
        ) : (
          <BubbleChart3c useLabels data={rawdata2} />
        )
      ) : null}
    </div>
  )
}

export default SkillSelector
// "Front-End", "UI / Design", "Back-End"
