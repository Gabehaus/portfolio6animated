import React, { useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import shallow from "zustand/shallow"
import Aos from "aos"
import { Box, useStore } from "./Box"
// import { BoxIpad } from "./BoxIpad"

// Auto-generated by gltfjsx

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.position.z = 3
    camera.position.y = 0
  })

  return null
}

export default function ThreeD1({ x, y }) {
  const [boxes, mutate] = useStore(
    state => [state.boxes, state.mutate],
    shallow
  )

  useEffect(() => {
    Aos.init({
      duration: 2000
    }) // initialize animate on scroll
  }, [])

  useEffect(() => {
    function animate() {
      mutate()
      requestAnimationFrame(animate)
    }
    animate()
  }, [mutate])

  return (
    <Canvas
      style={{
        width: "100%",
        height: "52vh",
        background: "transparent"
      }}
    >
      {boxes.map(id => (
        <Box key={id} id={id} xMs={x} yMs={y} color='red' />
      ))}
      <Dolly />
    </Canvas>
  )
}
