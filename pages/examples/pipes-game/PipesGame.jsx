import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Html, Box, OrbitControls, Bounds, Center } from '@react-three/drei'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'
import { useFrame } from '@react-three/fiber'
import { lerp } from 'three/src/math/MathUtils'
import { MeshStandardMaterial } from 'three'

const LABERINTH = [
  { type: 'i', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 'l', rot: 1 },
  { type: '', rot: 1 },
  { type: '', rot: 1 },
  { type: '', rot: 1 },
  { type: '', rot: 1 },
  { type: '', rot: 1 },
  { type: 't', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 'i', rot: 1 },
  { type: 'l', rot: 1 },
  { type: '', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 'l', rot: 1 },
  { type: '', rot: 1 },
  { type: '', rot: 1 },
  { type: 'i', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 't', rot: 1 },
  { type: '', rot: 1 },
  { type: 'i', rot: 1 },
  { type: '', rot: 1 },
  { type: '', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 't', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 'i', rot: 1 },
  { type: '', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 't', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 'i', rot: 1 },
  { type: '', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 'l', rot: 1 },
  { type: '', rot: 1 },
  { type: 'l', rot: 1 },
  { type: '', rot: 1 },
  { type: 'l', rot: 1 },
  { type: '', rot: 1 },
  { type: 'l', rot: 1 },
  { type: 'i', rot: 1 },
  { type: 'l', rot: 1 },
]

const Pipe = ({
  position = [0, 0, 0],
  startRotation = 0,
  type = 't' | 'l' | 'i',
}) => {
  const [hover, setHover] = useState(false)
  const [rotation, setRotation] = useState(startRotation)
  const currentRotation = useRef(rotation)
  const pipeRef = useRef(null)

  useFrame(() => {
    if (currentRotation.current != rotation) {
      const newRot = lerp(currentRotation.current, rotation, 0.25)
      pipeRef.current.rotation.z = newRot
      currentRotation.current = newRot
    }
  })

  const material = useMemo(() => {
    return new MeshStandardMaterial({ color: hover ? 'lightblue' : 'orange' })
  }, [hover])

  return (
    <group
      ref={pipeRef}
      position={position}
      rotation={[0, 0, startRotation]}
      onPointerEnter={(e) => {
        e.stopPropagation()
        setHover(true)
      }}
      onPointerLeave={() => {
        setHover(false)
      }}
      onClick={(e) => {
        e.stopPropagation()
        setRotation(rotation + Math.PI / 2)
      }}
    >
      <Box args={[3.001, 3.001, 1.001]} position={[0, 0, 0]}>
        <meshBasicMaterial wireframe opacity={0.1} transparent />
      </Box>

      {type == 'i' && <Box material={material} args={[3, 1, 1]}></Box>}

      {type == 'l' && (
        <group position={[-0.5, 0, 0]}>
          <Box material={material} args={[2, 1, 1]}></Box>
          <Box
            material={material}
            args={[1, 2, 1]}
            position={[0.5, -0.5, 0]}
          ></Box>
        </group>
      )}

      {type == 't' && (
        <group position={[0, 0, 0]}>
          <Box material={material} args={[3, 1, 1]}></Box>
          <Box
            material={material}
            args={[1, 2, 1]}
            position={[0, -0.5, 0]}
          ></Box>
        </group>
      )}
    </group>
  )
}

const Scene = () => {
  // const isMobile = useMediaQuery('(max-width: 768px)')
  // const { colorPreference } = useStore()
  // const { width: w, height: h } = useThree((state) => state.viewport)
  // const canvasSize = useThree((state) => state.size)

  const counterX = useRef(0)
  const counterY = useRef(0)
  const counterI = useRef(0)

  return (
    <Suspense
      fallback={
        <Html style={{ fontSize: '6vw', whiteSpace: 'nowrap' }} center>
          Wait a sec...
        </Html>
      }
    >
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 15]} intensity={0.4} />

      <Bounds fit clip damping={6} margin={1}>
        <Center>
          <Box position={[-2.5, 0, 0]} args={[2, 2, 2]}></Box>
          <Box position={[23.5, -12, 0]} args={[2, 2, 2]}></Box>

          {LABERINTH.map((p, i) => {
            if (counterI.current % 8 == 0 && i !== 0) {
              counterY.current += 3
              counterI.current = 0
            }

            const random = Math.round(Math.random() * 4)

            counterX.current = counterI.current * 3
            counterI.current += 1

            return (
              <Pipe
                key={i}
                type={p.type}
                position={[counterX.current, -counterY.current, 0]}
                startRotation={(Math.PI / 2) * random}
              />
            )
          })}
        </Center>
      </Bounds>
    </Suspense>
  )
}

export default function PipesGame() {
  const { setCurrentExample } = useAppContext()

  useEffect(() => {
    setCurrentExample({
      title: 'Art Shelf',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/pipes-game/PipesGame.jsx',
    })
    document.body.style.overflow = 'hidden'

    return () => (document.body.style.overflow = 'auto')
  }, [setCurrentExample])

  return (
    <>
      <Head>
        <title>Pipes Game | Shitty examples by @andreuscafe</title>
        <meta name="description" content="3D pipes game using R3F" />
      </Head>

      <Canvas
        style={{ position: 'fixed' }}
        camera={{
          position: [-10, 10, 30],
          fov: 20,
        }}
        shadows
        linear
        flat
        mode="concurrent"
      >
        <Scene />
      </Canvas>
    </>
  )
}
