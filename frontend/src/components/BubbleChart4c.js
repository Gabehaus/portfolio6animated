import React, { useEffect, useState } from "react"
import * as d3 from "d3"
var _ = require("lodash")

const BubbleChart4c = ({ data }) => {
  const [useLabels, setUseLabels] = useState(false)
  const [width, setWidth] = useState(600)
  const [height, setHeight] = useState(400)

  const [minValue, setMinValue] = useState(1)
  const [maxValue, setMaxValue] = useState(100)
  // this.mounted = false

  const [stateData, setStateData] = useState([])
  const [mytext, setMyText] = useState([
    "Javascript",
    "Typescript",
    "Node",
    "React",
    "Redux",
    "NextJS",
    "Vue"
  ])

  useEffect(() => {
    // this.mounted = true

    if (data.length > 0) {
      setMinValue(
        0.1 *
          d3.min(data, item => {
            return item.v
          })
      )

      setMaxValue(
        1.05 *
          d3.max(data, item => {
            return item.v
          })
      )

      simulatePositions(data)
    }
  })

  const radiusScale = value => {
    const fx = d3
      .scaleSqrt()
      .range([1, 70]) //second arg determines size of circles   window.innerWidth < 500 ? 50 : 70
      .domain([this.minValue, this.maxValue])
    // console.log("value: ", value)
    return fx(value)
  }

  const simulatePositions = data => {
    const simulation = d3
      .forceSimulation()
      .nodes(data)
      .velocityDecay(0.5)
      .force("x", d3.forceX().strength(0.05))
      .force("y", d3.forceY().strength(0.05))
      .force(
        "collide",
        d3.forceCollide(d => {
          return radiusScale(d.v) + 2
        })
      )
      .on("tick", () => {
        setStateData({ data })
      })
  }

  const renderBubbles = data => {
    const minValue =
      0.95 *
      d3.min(data, item => {
        return item.v
      })

    const maxValue =
      1.05 *
      d3.max(data, item => {
        return item.v
      })

    const color = d3
      .scaleLinear()
      .domain([minValue, maxValue])
      .interpolate(d3.interpolateHcl)
      .range(["#645bde", "#9d81db"])

    // render simple circle element
    //radiusScale controls size of circles
    if (true) {
      const circles = _.map(data, (item, index) => {
        return (
          <circle
            key={index}
            r={radiusScale(item.v)}
            cx={item.x}
            cy={item.y}
            fill={color(item.v)}
            stroke={d3.rgb(color(item.v)).brighter(2)}
            strokeWidth='2'
          />
        )
      })

      return (
        <g transform={`translate(${props.width / 1}, ${props.height / 2})`}>
          {circles}
        </g>
      )
    }

    // render circle and text elements inside a group
    const texts = _.map(data, (item, index) => {
      const props = props
      const fontSize = radiusScale(item.v) / 3
      return (
        <g
          key={index}
          transform={`translate(${props.width / 3.3 + item.x}, ${props.height /
            2 +
            item.y})`} //divisors originally were of value 2, this is how to move circles inside square 3, 1.7, 1.3
        >
          <circle
            r={radiusScale(item.v)}
            fill={color(item.v)}
            stroke={d3.rgb(color(item.v)).brighter(2)}
            strokeWidth='2'
          />
          <text
            dy='6'
            fill='#0d0d0d'
            fontFamily='Arial'
            textAnchor='middle'
            fontSize={`${fontSize}px`}
            fontWeight='bold'
          >
            {mytext[index]}
          </text>
        </g>
      )
    })

    return texts
  }

  if (stateData.length) {
    return (
      <svg
        width={"100vw"} // "#0d0d0d"
        height={"51vh"}
        style={{
          marginTop: "0vh",
          marginLeft: "50%",
          transform: "translateX(-50%)",
          background: "transparent"
        }}
      >
        {renderBubbles(stateData)}
      </svg>
    )
  }

  return <div>Loading</div>
}

export default BubbleChart4c
