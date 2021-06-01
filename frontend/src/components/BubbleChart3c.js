import React from "react"
import * as d3 from "d3"
var _ = require("lodash")

class BubbleChart1c extends React.Component {
  static defaultProps = {
    data: [],
    useLabels: false,
    width: 600,
    height: 400
  }

  constructor(props) {
    super(props)

    this.minValue = 1
    this.maxValue = 100
    this.mounted = false

    this.state = {
      data: [],
      mytext: [
        "Bootstrap",
        "Chakra",
        "MaterialUI",
        "D3",
        "Chart.js",
        "GSAP",
        "React3Fiber"
      ]
    }

    this.radiusScale = this.radiusScale.bind(this)
    this.simulatePositions = this.simulatePositions.bind(this)
    this.renderBubbles = this.renderBubbles.bind(this)
  }

  componentWillMount() {
    this.mounted = true
  }

  componentDidMount() {
    if (this.props.data.length > 0) {
      this.minValue =
        0.1 *
        d3.min(this.props.data, item => {
          return item.v
        })

      this.maxValue =
        1.05 *
        d3.max(this.props.data, item => {
          return item.v
        })

      this.simulatePositions(this.props.data)
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  radiusScale = value => {
    const fx = d3
      .scaleSqrt()
      .range([1, 70]) //second arg determines size of circles   window.innerWidth < 500 ? 50 : 70
      .domain([this.minValue, this.maxValue])
    // console.log("value: ", value)
    return fx(value)
  }

  simulatePositions = data => {
    this.simulation = d3
      .forceSimulation()
      .nodes(data)
      .velocityDecay(0.5)
      .force("x", d3.forceX().strength(0.05))
      .force("y", d3.forceY().strength(0.05))
      .force(
        "collide",
        d3.forceCollide(d => {
          return this.radiusScale(d.v) + 2
        })
      )
      .on("tick", () => {
        if (this.mounted) {
          this.setState({ data })
        }
      })
  }

  renderBubbles = data => {
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
    if (!this.props.useLabels) {
      const circles = _.map(data, (item, index) => {
        return (
          <circle
            key={index}
            r={this.radiusScale(item.v)}
            cx={item.x}
            cy={item.y}
            fill={color(item.v)}
            stroke={d3.rgb(color(item.v)).brighter(2)}
            strokeWidth='2'
          />
        )
      })

      return (
        <g
          transform={`translate(${this.props.width / 1}, ${this.props.height /
            2})`}
        >
          {circles}
        </g>
      )
    }

    // render circle and text elements inside a group
    const texts = _.map(data, (item, index) => {
      const props = this.props
      const fontSize = this.radiusScale(item.v) / 3
      return (
        <g
          key={index}
          transform={`translate(${props.width / 3.3 + item.x}, ${props.height /
            2 +
            item.y})`} //divisors originally were of value 2, this is how to move circles inside square 3, 1.7, 1.3
        >
          <circle
            r={this.radiusScale(item.v)}
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
            {this.state.mytext[index]}
          </text>
        </g>
      )
    })

    return texts
  }

  render() {
    if (this.state.data.length) {
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
          {this.renderBubbles(this.state.data)}
        </svg>
      )
    }

    return <div>Loading</div>
  }
}

export default BubbleChart1c
