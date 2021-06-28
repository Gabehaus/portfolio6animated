import React, { useEffect } from "react"

import BubbleChart from "./BubbleChart"

import BubbleChart1b from "./BubbleChart1b"

import BubbleChart1c from "./BubbleChart1c"

import randomColor from "randomcolor"
const TagCloud = require("TagCloud")

var _ = require("lodash")

const SkillSelector = ({ screen, radius }) => {
  const rawdata4 = _.map(
    [90, 70, 50, 90, 90, 40, 90, 70, 55, 40, 40, 30, 30, 70, 55, 55, 70, 55],
    thing => {
      return {
        v: thing
      }
    }
  )

  useEffect(() => {
    const container = ".tagcloud"
    const texts = [
      "3D",
      "TagCloud",
      "JavaScript",
      "CSS3",
      "Animation",
      "Interactive",
      "Mouse",
      "Rolling",
      "Sphere",
      "6KB",
      "v2.x",
      "Interactive",
      "Mouse",
      "Rolling",
      "Sphere",
      "6KB",
      "v2.x"
    ]

    const options = {
      radius: `${radius}`,
      maxSpeed: "fast",
      initSpeed: "fast",
      fill: "blue"
    }

    const optionsMobile = {
      radius: "150",
      maxSpeed: "fast",
      initSpeed: "fast",
      fill: "blue"
    }

    TagCloud(container, texts, options)

    TagCloud(".tagcloudMobile", texts, optionsMobile)
  }, [])

  return (
    <div id='circle-wrapper'>
      {screen === "Desktop" ? (
        <div
          class='tagcloud'
          style={{
            marginLeft: "-5vw",
            marginTop: "-2vh",
            zIndex: "-1",
            minWidth: "10vw",
            minHeight: "20vw",
            background: "transparent",
            border: "solid 1x white",
            overflow: "visible",
            color: "white"
          }}
        ></div>
      ) : null}
      {screen === "Ipad" ? <BubbleChart1b useLabels data={rawdata4} /> : null}
      {screen === "Mobile" ? (
        <div
          class='tagcloudMobile'
          style={{
            paddingLeft: "9vw",
            marginTop: "5vw",
            zIndex: "-1",
            minWidth: "10vw",
            minHeight: "20vw",
            background: "transparent",
            border: "solid 1x white",
            overflow: "visible"
          }}
        ></div>
      ) : null}
    </div>
  )
}

export default SkillSelector
