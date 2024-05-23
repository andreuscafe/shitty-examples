/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Harry_L (https://sketchfab.com/Harry_L)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/diamond-9349ff66847a4bf1b4151d6af288e42c
Title: Diamond
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { BufferAttribute, DoubleSide, ShaderMaterial, Vector2 } from 'three'
import testVertexShader from './shaders/test/vertex.glsl'
import testFragmentShader from './shaders/test/fragment.glsl'
import { useFrame } from '@react-three/fiber'

export function DiamondModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/diamond.glb')
  const { actions } = useAnimations(animations, group)

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
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="pCone1_blinn1_0"
        castShadow
        receiveShadow
        scale={0.01}
        geometry={nodes.pCone1_blinn1_0.geometry}
        position={[0, 0.25, 0]}
        rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 2]}
      >
        <shaderMaterial
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
        {/* <meshNormalMaterial attach="material" /> */}
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/diamond.glb')