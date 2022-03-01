import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense, useEffect, useMemo } from 'react'
import {
  useGLTF,
  ScrollControls,
  Scroll,
  Environment,
  Merged,
  Text,
  useScroll,
} from '@react-three/drei'
import {
  CircleBufferGeometry,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
} from 'three'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'
import Truck from '../../../components/Models/Truck'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { lerp } from 'three/src/math/MathUtils'
import { useStore } from '../../../store/store'

const MergedTrees = () => {
  const { nodes, materials } = useGLTF('/models/tree.gltf')

  const TREES = useMemo(() => {
    const trees = []

    while (trees.length < 3000) {
      const x = Math.round((Math.random() - 0.08) * 100)
      const z = Math.round((Math.random() - 0.8) * 150)
      const scale = (Math.random() + 0.6) * 0.1

      if (!trees.some((e) => e.x == x && e.z == z)) {
        trees.push({ x, z, scale })
      }
    }

    console.log(trees.length)

    return trees
  }, [])

  const spruceMesh = useMemo(
    () => new Mesh(nodes['tree-spruce'].geometry, materials.color_main),
    [nodes, materials]
  )

  const circleMesh = useMemo(() => {
    const geo = new CircleBufferGeometry(1, 16)

    const mat = new MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.2,
    })

    return new InstancedMesh(geo, mat, 2000)
  }, [])

  return (
    <Merged meshes={[spruceMesh, circleMesh]} limit={2000}>
      {(Spruce, Shadow) => (
        <>
          {TREES.map((e, i) => {
            if (e)
              return (
                <>
                  <Spruce
                    key={i}
                    position={[e.x, 0, e.z]}
                    scale={[e.scale, e.scale * 1.2, e.scale]}
                  />
                  <Shadow
                    scale={e.scale * 4}
                    position={[e.x, e.scale * 0.1, e.z]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                </>
              )
          })}
        </>
      )}
    </Merged>
  )
}

const Rig = () => {
  const data = useScroll()
  const { camera } = useThree()

  useFrame(() => {
    camera.position.y = lerp(20, 6, data.offset)
    camera.position.z = lerp(11, 10, data.offset)
    camera.rotation.set(lerp(-Math.PI / 3, 0.1, data.offset), 0, 0)
    camera.fov = lerp(30, 40, data.offset)
    camera.updateProjectionMatrix()
  })

  return <></>
}

export default function TheForest() {
  const { setCurrentExample } = useAppContext()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { colorPreference } = useStore()

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
        camera={{ position: [0, 15, 15], fov: 70 }}
        frameloop="demand"
      >
        <Suspense fallback={null}>
          <fog
            attach="fog"
            color={colorPreference == 'light' ? '#f9f3ea' : '#707070'}
            near={10}
            far={100}
          />

          <ScrollControls
            pages={isMobile ? 4 : 2} // Each page takes 100% of the height of the canvas
            distance={1} // A factor that increases scroll bar travel (default: 1)
            damping={4} // Friction, higher is faster (default: 4)
            horizontal
          >
            <Environment preset={'dawn'} />

            <Scroll>
              <MergedTrees />
              <Truck
                position={[2, -0.1, (Math.random() - 0.5) * 5]}
                rotation={[0, Math.PI / Math.random(), 0]}
                scale={0.7}
              />
              <Text
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                position={[0, -0.01, -1]}
                fontSize={2.5}
                color="#3b4d4c"
              >
                FOREST
              </Text>
              <Text
                position={[isMobile ? 40 : 50, 20, -50]}
                fontSize={2.5}
                color="#3b4d4c"
                scale={isMobile ? 1.6 : 5}
              >
                SILENCE
              </Text>

              {/* <Plane
                args={[300, 300, 2, 2]}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.001, 80]}
              >
                <meshBasicMaterial attach="material" color="#faebd7" />
              </Plane> */}

              <Rig />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  )
}

useGLTF.preload('/models/tree.gltf')
// useGLTF.preload('/models/truck.gltf')
