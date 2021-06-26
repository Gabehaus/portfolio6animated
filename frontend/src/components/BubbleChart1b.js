import React from "react"
import * as d3 from "d3"

var _ = require("lodash")

class BubbleChart1b extends React.Component {
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
        "Redux",
        "Typescript",
        "Node",
        "React",
        "Javascript",
        "D3",
        "Bootstrap",
        "MDB",
        "Chakra",
        "Chart.js",
        "GSAP",
        "ThreeJS",

        "TypeORM",

        "Mongoose",
        "MongoDB",
        "SQL",
        "Express",
        "GraphQL"
      ]
    }

    this.radiusScale = this.radiusScale.bind(this)
    this.simulatePositions = this.simulatePositions.bind(this)
    this.renderBubbles = this.renderBubbles.bind(this)
  }

  UNSAFE_componentWillMount() {
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
      .range([1, 50]) //second arg determines size of circles   window.innerWidth < 500 ? 50 : 70
      .domain([this.minValue, this.maxValue])
    // console.log("value: ", value)
    return fx(value)
  }

  simulatePositions = data => {
    this.simulation = d3
      .forceSimulation()
      .nodes(data)
      .velocityDecay(0.9)
      .force("x", d3.forceX().strength(0.22))
      .force("y", d3.forceY().strength(0.35))
      .force(
        "collide ",
        d3.forceCollide(d => {
          return this.radiusScale(d.v) + 9
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
      .range(["#0370ff", "#cd45ff"])

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
          transform={`translate(${this.props.width / 2}, ${this.props.height /
            2})`}
        >
          {circles}
        </g>
      )
    }
    //    window.innerWidth < 500
    // ? props.width / 3 + item.x
    // : props.width / 1.7 + item.x
    // render circle and text elements inside a group
    const texts = _.map(data, (item, index) => {
      const props = this.props
      const fontSize = this.radiusScale(item.v) / 3
      return (
        <g
          key={index}
          transform={`translate(${props.width / 1.5 + item.x}, ${props.height /
            1.5 +
            item.y})`} //divisors originally were of value 2, this is how to move circles inside square 3, 1.7, 1.3
        >
          <circle
            r={this.radiusScale(item.v)}
            fill={color(item.v)}
            stroke={d3.rgb(color("black")).brighter(2)}
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
        <div
          style={{
            minHeight: window.innerHeight < 1000 ? "90vh" : "0vw",
            minWidth: "50vw",
            position: "relative !important",

            marginBottom: "20vw !important"
          }}
        >
          {" "}
          <svg
            width={"100vw"} //window.innerWidth < 800 ? "100vw" : "50vw"   "#0d0d0d"
            height={"50vh"}
            style={{
              marginTop: "0vh",
              overflow: "visible",
              background: "transparent",
              border: "none 2px yellow"
            }}
          >
            {this.renderBubbles(this.state.data)}
          </svg>
        </div>
      )
    }

    return <div>Loading</div>
  }
}

export default BubbleChart1b
