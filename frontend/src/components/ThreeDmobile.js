import React, { useEffect } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import shallow from "zustand/shallow"

import { BoxMobile, useStore } from "./BoxMobile"

// Auto-generated by gltfjsx

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.position.z = 3
    camera.position.y = 0
  })

  return null
}

export default function ThreeD1() {
  const [boxes, mutate] = useStore(
    state => [state.boxes, state.mutate],
    shallow
  )

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
        height: "30vh"
      }}
    >
      {boxes.map(id => (
        <BoxMobile key={id} id={id} />
      ))}
      <Dolly />
    </Canvas>
  )
}
