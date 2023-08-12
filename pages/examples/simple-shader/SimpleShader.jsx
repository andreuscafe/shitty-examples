import React, { useEffect } from 'react'
import styles from './SimpleShader.module.scss'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { BufferAttribute, DoubleSide, Vector2 } from 'three'

import testVertexShader from './shaders/test/vertex.glsl'
import testFragmentShader from './shaders/test/fragment.glsl'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'

export default function MuralPainting() {
  const { setCurrentExample } = useAppContext()

  useEffect(() => {
    setCurrentExample({
      title: 'Simple shader',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/simple-shader/SimpleShader.jsx',
    })
    document.body.style.overflow = 'hidden'

    return () => (document.body.style.overflow = 'auto')
  }, [setCurrentExample])

  return (
    <>
      <Head>
        <title>Simple Shader | Shitty examples by @andreuscafe</title>
      </Head>
      <div className="relative h-full flex items-center justify-center p-8">
        <Canvas className="!fixed !w-screen !h-screen top-0 left-0 z-10">
          <Wave />
          {/* <OrbitControls /> */}
          <PerspectiveCamera
            makeDefault
            position={[0.25, -3, 0.4]}
            rotation={[Math.PI / 2, 0.3, 0.4]}
          />
        </Canvas>

        <h1 className="text-2xl lg:text-6xl z-20 text-center">Hola mundo</h1>
      </div>
    </>
  )
}

const Wave = () => {
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
