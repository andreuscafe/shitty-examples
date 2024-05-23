import React, { useEffect } from 'react'
import styles from './Diamond.module.scss'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { BufferAttribute, DoubleSide, Vector2 } from 'three'

import testVertexShader from './shaders/test/vertex.glsl'
import testFragmentShader from './shaders/test/fragment.glsl'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import { useStore } from '../../../store/store'
import { DiamondModel } from './DiamondModel'

export default function DiamondPage() {
  const { setCurrentExample } = useAppContext()
  const { setColorPreference } = useStore.getState()

  useEffect(() => {
    setCurrentExample({
      title: 'Diamond',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/diamond/Diamond.jsx',
    })
    document.body.style.overflow = 'hidden'

    setColorPreference('dark')

    return () => (document.body.style.overflow = 'auto')
  }, [setCurrentExample, setColorPreference])

  return (
    <>
      <Head>
        <title>Simple Shader | Shitty examples by @andreuscafe</title>
      </Head>
      <div className="relative h-full flex items-center justify-center p-8">
        <Canvas className="!fixed !w-screen !h-screen top-0 left-0 z-10">
          <DiamondModel position={[0, 0.5, 0]} />
          {/* <DiamondModel position={[0.5, 0, 0.5]} /> */}
          <OrbitControls position={[0, 10, 10]} />
          <PerspectiveCamera
            makeDefault
            position={[10, 0, 0]}
            rotation={[0, 0, 0]}
          />
        </Canvas>

        <h1 className="text-2xl lg:text-6xl z-20 text-center mt-40">
          Jewel of Soul
        </h1>
      </div>
    </>
  )
}

const Diamond = () => {
  const geoRef = useRef(null)
  const matRef = useRef(null)

  useLayoutEffect(() => {
    const geo = geoRef.current

    if (geo === null) return

    const count = geo.attributes.position.count
    const randoms = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      randoms[i] = Math.random()
    }

    geo.setAttribute('aRandom', new BufferAttribute(randoms, 1))
  }, [])

  useFrame(({ clock }) => {
    const mat = matRef.current

    if (mat) {
      matRef.current.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh>
      <planeBufferGeometry ref={geoRef} args={[2, 2, 128, 128]} />
      <rawShaderMaterial
        ref={matRef}
        attach="material"
        side={DoubleSide}
        vertexShader={testVertexShader}
        fragmentShader={testFragmentShader}
        transparent
        uniforms={{
          uFrequency: { value: new Vector2(3.0, 3.0) },
          uTime: { value: 0.0 },
        }}
      />
    </mesh>
  )
}
