import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import {
  useGLTF,
  ScrollControls,
  Scroll,
  Environment,
  Merged,
  Text,
} from '@react-three/drei'
import { Mesh } from 'three'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'

function Car(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/truck.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          geometry={nodes.Mesh_body002.geometry}
          material={materials.plastic}
        />
        <mesh
          geometry={nodes.Mesh_body002_1.geometry}
          material={materials.paintGreen}
        />
        <mesh
          geometry={nodes.Mesh_body002_2.geometry}
          material={materials.lightFront}
        />
        <mesh
          geometry={nodes.Mesh_body002_3.geometry}
          material={materials._defaultMat}
        />
        <mesh
          geometry={nodes.Mesh_body002_4.geometry}
          material={materials.window}
        />
        <mesh
          geometry={nodes.Mesh_body002_5.geometry}
          material={materials.lightBack}
        />
        <group position={[-0.35, 0.3, 0.76]} scale={[-1, 1, 1]}>
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={nodes.Mesh_wheel_frontLeft002.material}
          />
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={nodes.Mesh_wheel_frontLeft002_1.material}
          />
        </group>
        <group position={[0.35, 0.3, 0.76]}>
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={nodes.Mesh_wheel_frontLeft002.material}
          />
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={nodes.Mesh_wheel_frontLeft002_1.material}
          />
        </group>
        <group position={[-0.35, 0.3, -0.86]} scale={[-1, 1, 1]}>
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={nodes.Mesh_wheel_frontLeft002.material}
          />
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={nodes.Mesh_wheel_frontLeft002_1.material}
          />
        </group>
        <group position={[0.35, 0.3, -0.86]}>
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002.geometry}
            material={nodes.Mesh_wheel_frontLeft002.material}
          />
          <mesh
            geometry={nodes.Mesh_wheel_frontLeft002_1.geometry}
            material={nodes.Mesh_wheel_frontLeft002_1.material}
          />
        </group>
      </group>
    </group>
  )
}

const MergedTrees = () => {
  const { nodes, materials } = useGLTF('/models/tree.gltf')
  const spruceMesh = useMemo(
    () => new Mesh(nodes['tree-spruce'].geometry, materials.color_main),
    [nodes, materials]
  )

  return (
    <Merged meshes={[spruceMesh]}>
      {(Spruce) => (
        <>
          {Array(20)
            .fill(null)
            .map((e, i) => {
              const x = (Math.random() - 1.2) * 10
              const y = (Math.random() - 0.5) * 0
              const z = (Math.random() - 0.5) * 15
              const scale = (Math.random() + 0.7) * 0.08

              return <Spruce key={i} position={[x, y, z]} scale={scale} />
            })}
          {Array(200)
            .fill(null)
            .map((e, i) => {
              const x = (Math.random() + 0.08) * 30
              const y = (Math.random() - 0.5) * 0
              const z = (Math.random() - 0.5) * 25
              const scale = (Math.random() + 0.7) * 0.08

              return <Spruce key={i} position={[x, y, z]} scale={scale} />
            })}
        </>
      )}
    </Merged>
  )
}

export default function TheForest() {
  const { setCurrentExample } = useAppContext()

  useEffect(() => {
    setCurrentExample({
      title: 'The Forest',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/the-forest/TheForest.jsx',
    })
    document.body.style.overflow = 'hidden'

    return () => (document.body.style.overflow = 'auto')
  }, [setCurrentExample])

  return (
    <>
      <Head>
        <title>The Forest | Shitty examples by @andreuscafe</title>
      </Head>

      <Canvas
        style={{ position: 'fixed' }}
        camera={{ position: [0, 10, 10], fov: 40 }}
        frameloop="demand"
      >
        <Suspense fallback={null}>
          <ScrollControls
            pages={2} // Each page takes 100% of the height of the canvas
            distance={1} // A factor that increases scroll bar travel (default: 1)
            damping={4} // Friction, higher is faster (default: 4)
            horizontal
          >
            <Environment preset={'dawn'} />

            <Scroll>
              <MergedTrees />
              <Car
                position={[
                  (Math.random() - 0.3) * 5,
                  -0.1,
                  (Math.random() - 0.3) * 5,
                ]}
                rotation={[0, Math.PI / Math.random(), 0]}
                scale={0.8}
              />
              <Text
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                position={[0, 0, -1]}
                fontSize={2.5}
                color="#3b4d4c"
              >
                FOREST
              </Text>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  )
}

useGLTF.preload('/models/tree.gltf')
useGLTF.preload('/models/truck.gltf')
