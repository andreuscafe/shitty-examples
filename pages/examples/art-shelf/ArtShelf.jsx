import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef } from 'react'
import styles from './ArtShelf.module.scss'
import {
  ScrollControls,
  Scroll,
  SpotLight,
  OrbitControls,
} from '@react-three/drei'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { TextureLoader } from 'three'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { lerp } from 'three/src/math/MathUtils'

const ART_PIECES = [
  {
    title: 'Paisaje',
    imgPath: '/images/artshelf/paisaje.jpg',
  },
  {
    title: 'Zorrito',
    imgPath: '/images/artshelf/zorrito.jpg',
  },
  {
    title: 'Condor',
    imgPath: '/images/artshelf/condor.jpg',
  },
  {
    title: 'Tapir',
    imgPath: '/images/artshelf/tapir.jpg',
  },
  {
    title: 'Cotorras',
    imgPath: '/images/artshelf/cotorras.jpg',
  },
  {
    title: 'Jaguar',
    imgPath: '/images/artshelf/jaguar.jpg',
  },
  {
    title: 'Llama',
    imgPath: '/images/artshelf/llama.jpg',
  },
]

// const Rig = () => {
//   const data = useScroll()
//   const { camera } = useThree()
//   const lastScroll = useRef(0)

//   useFrame(() => {
//     // const isForward = lastScroll.current < data.offset

//     // camera.position.y = lerp(20, 6, data.offset)
//     // camera.position.z = lerp(11, 10, data.offset)
//     // camera.rotation.set(0, data.delta * -200, 0)
//     // camera.fov = lerp(30, 40, data.offset)
//     // camera.updateProjectionMatrix()
//     // console.log(data.scroll.current)
//     // lastScroll.current = data.offset
//   })

//   return <></>
// }

const Shelf = (props) => {
  return (
    <mesh {...props}>
      <meshPhysicalMaterial color={0xffffff} />
      <boxGeometry args={[1, 0.2, 1]} />
    </mesh>
  )
}

// eslint-disable-next-line react/display-name
const ImageTexture = React.forwardRef((props, ref) => {
  const { scale, url } = props
  const texture = useLoader(TextureLoader, url)
  const { width, height } = texture.source.data

  return (
    <group>
      <mesh ref={ref} scale={[scale, scale, 0.2]} castShadow>
        <boxBufferGeometry
          attach="geometry"
          args={[width / 1000, height / 1000, 1, 1]}
        />
        <meshStandardMaterial
          attach="material"
          map={texture}
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  )
})

const ArtPiece = (props) => {
  const { image, title, index } = props
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { width: w, height: h } = useThree((state) => state.viewport)
  const imageRef = useRef(null)
  const lightRef = useRef(null)

  // const shelfPosition = isMobile
  //   ? [0, -h * index - w / 2.7, 0]
  //   : [w * index, -h * 0.35, 0]

  const artPosition = isMobile ? [0, -h * index, 0] : [w * index, -h * 0, 0]
  const lightPosition = isMobile ? [-0.5, 1.5, 3] : [0, 1.3, 3.5]

  useEffect(() => {
    if (imageRef.current) lightRef.current.target = imageRef.current
  }, [imageRef])

  return (
    <>
      {/* <Shelf
        position={shelfPosition}
        scale={isMobile ? [w * 0.8, 1, 1] : [h * 0.8, 1, 1]}
        castShadow
        receiveShadow
      /> */}
      {/* <Image
        ref={imageRef}
        position={imagePosition}
        // position={[position[0], position[1] + 1.18, position[2]]}
        scale={isMobile ? w * 0.7 : h * 0.6}
        url={image}
        alt={title}
        castShadow
      /> */}
      <group position={artPosition}>
        <ImageTexture
          ref={imageRef}
          // position={imagePosition}
          scale={isMobile ? w * 0.7 : h * 0.6}
          url={image}
          title={title}
        />
        <SpotLight
          ref={lightRef}
          position={lightPosition}
          target={imageRef.current}
          penumbra={1}
          radiusTop={0.1}
          angle={isMobile ? 0.4 : 0.6}
          attenuation={isMobile ? 1.5 : 2}
          anglePower={isMobile ? 14 : 5}
          intensity={isMobile ? 1 : 1}
          distance={isMobile ? 10 : 10}
          radiusBottom={isMobile ? 13 : 8}
          castShadow
          color={0xffffff}
        />
      </group>
    </>
  )
}

const Scene = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  // const { colorPreference } = useStore()
  const { width: w, height: h } = useThree((state) => state.viewport)
  // const canvasSize = useThree((state) => state.size)
  const cameraRots = useRef({ x: 0, y: 0 })

  useFrame((t) => {
    if (!isMobile) {
      const x = lerp(cameraRots.current.x, t.mouse.y / 30, 0.05)
      const y = lerp(cameraRots.current.y, -t.mouse.x / 5, 0.05)

      t.camera.rotation.x = x
      t.camera.rotation.y = y

      cameraRots.current.x = x
      cameraRots.current.y = y
    }
  })

  return (
    <Suspense fallback={null}>
      {/* <OrbitControls /> */}

      <ScrollControls
        pages={ART_PIECES.length} // Each page takes 100% of the height of the canvas
        distance={0.5} // A factor that increases scroll bar travel (default: 1)
        damping={2} // Friction, higher is faster (default: 4)
        horizontal={!isMobile}
        // infinite
      >
        <Scroll>
          {ART_PIECES.map((piece, i) => (
            <ArtPiece
              key={i}
              image={piece.imgPath}
              title={piece.title}
              index={i}
            />
          ))}

          {/* <Rig /> */}
          <ambientLight intensity={0.5} color={0xffccaa} />
        </Scroll>

        <Scroll html>
          <div className={styles.wrapper}>
            {ART_PIECES.map((piece, i) => (
              <section className={styles.item} key={i}>
                <h1 className={styles.title}>{piece.title}</h1>
              </section>
            ))}
          </div>
        </Scroll>

        <mesh position={[0, 0, -0.1]} receiveShadow>
          <planeGeometry args={[w * 3, h * 3]} />
          <meshStandardMaterial color={0xffffff} />
        </mesh>
      </ScrollControls>
    </Suspense>
  )
}

export default function ArtShelf() {
  const { setCurrentExample } = useAppContext()

  useEffect(() => {
    setCurrentExample({
      title: 'Art Shelf',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/art-shelf/ArtShelf.jsx',
    })
    document.body.style.overflow = 'hidden'

    return () => (document.body.style.overflow = 'auto')
  }, [setCurrentExample])

  return (
    <>
      <Head>
        <title>Art Shelf | Shitty examples by @andreuscafe</title>
      </Head>

      <Canvas
        style={{ position: 'fixed' }}
        camera={{
          // position: [-4, 0, 8],
          // rotation: [0, -Math.PI / 50, 0],
          position: [0, 0, 13],
          fov: 20,
        }}
        shadows
        linear
        flat
        mode="concurrent"
      >
        <Scene />

        <EffectComposer>
          <Noise opacity={0.2} />
          {/* <Vignette eskil={false} offset={0.1} darkness={0.5} /> */}
        </EffectComposer>
      </Canvas>
    </>
  )
}
