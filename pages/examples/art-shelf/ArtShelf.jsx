import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import styles from './ArtShelf.module.scss'
import { SpotLight, Html, Text, OrbitControls } from '@react-three/drei'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { TextureLoader } from 'three'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { useArtStore } from '../../../store/artshelfStore'
import { AnimatePresence, motion } from 'framer-motion'

import { ScrollControls, Scroll, useScroll } from './ScrollControls.tsx'

const ART_PIECES = [
  {
    title: 'Ruby',
    imgPath: '/images/artshelf/ia/ruby.jpeg',
  },
  {
    title: 'Assembly',
    imgPath: '/images/artshelf/ia/assembly.jpeg',
  },
  {
    title: 'Game',
    imgPath: '/images/artshelf/ia/game.jpeg',
  },
  {
    title: 'Hacker',
    imgPath: '/images/artshelf/ia/hacker.jpeg',
  },
  {
    title: 'Lua',
    imgPath: '/images/artshelf/ia/lua.jpeg',
  },
  {
    title: 'Python',
    imgPath: '/images/artshelf/ia/python.jpeg',
  },
  {
    title: 'Unreal',
    imgPath: '/images/artshelf/ia/unreal.jpeg',
  },
  {
    title: 'WebGL',
    imgPath: '/images/artshelf/ia/webgl.jpeg',
  },
]

// eslint-disable-next-line react/display-name
const ImageTexture = React.forwardRef((props, ref) => {
  const { scale, url } = props
  const { setSelectedPiece, selectedPiece } = useArtStore()
  const texture = useLoader(TextureLoader, url)
  const [hover, setHover] = useState(false)
  const { width, height } = texture.source.data

  return (
    <group>
      <mesh
        ref={ref}
        scale={[scale, scale, 0.2]}
        castShadow
        onPointerEnter={() => {
          if (selectedPiece !== props.index) {
            setHover(true)
          }
        }}
        onPointerLeave={() => {
          if (selectedPiece !== props.index) {
            setHover(false)
          }
        }}
        onClick={(e) => {
          setSelectedPiece(props.index)

          if (selectedPiece == props.index) {
            setSelectedPiece(null)
          }
          e.stopPropagation()
        }}
      >
        <boxBufferGeometry
          attach="geometry"
          args={[width / 800, height / 800, 1, 1]}
        />
        <meshStandardMaterial
          attach="material"
          map={texture}
          roughness={1}
          metalness={hover ? 0 : 0.1}
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

  const artPosition = isMobile ? [0, -h * index, 0] : [w * index, 0, 0]
  const lightPosition = isMobile ? [-1.5, 1.5, 3] : [-0.5, 1.5, 3.5]

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
          index={index}
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

const CameraRig = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const cameraRots = useRef({ x: 0, y: 0 })
  const { width: w, height: h } = useThree((state) => state.viewport)

  const { selectedPiece } = useArtStore()

  const scroll = useScroll()

  console.log(scroll.el.style)

  const scrollCurrentOffset = useRef(0)
  const scrollCurrentFrame = useRef(0)

  useEffect(() => {
    if (selectedPiece != null) {
      scroll.el.style.overflow = 'hidden'

      scrollCurrentFrame.current = 0
      scrollCurrentOffset.current = scroll.offset
    } else {
      scroll.el.style.overflow = 'hidden auto'

      scrollCurrentFrame.current = 0

      // scroll.offset = (1 / (ART_PIECES.length - 1)) * selectedPiece
    }
  }, [selectedPiece, scroll.el.style, scroll])

  const lerp = (a, b, t) => {
    return a + (b - a) * t
  }

  useFrame((t) => {
    if (isMobile) {
      t.camera.rotation.y = -Math.PI / 20

      if (selectedPiece !== null) {
        const scrollTarget = (1 / (ART_PIECES.length - 1)) * selectedPiece

        scrollCurrentFrame.current += 1
        const time = scrollCurrentFrame.current / 200

        if (time <= 1) {
          scroll.offset = lerp(scroll.offset, scrollTarget, time)
        } else {
          scroll.offset = scrollTarget
        }

        t.camera.position.z = lerp(t.camera.position.z, 5, 0.05)
        t.camera.position.x = lerp(t.camera.position.x, -0.75, 0.05)
      } else {
        t.camera.position.z = lerp(t.camera.position.z, 14, 0.05)
        t.camera.position.x = lerp(t.camera.position.x, -2.2, 0.05)
      }
    } else {
      if (selectedPiece !== null) {
        t.camera.position.x = lerp(t.camera.position.x, -2.5, 0.04)
        t.camera.position.z = lerp(t.camera.position.z, 5, 0.05)
        t.camera.rotation.y = lerp(t.camera.rotation.y, -Math.PI / 6, 0.04)
        t.camera.rotation.x = lerp(t.camera.rotation.x, t.mouse.y / 30, 0.05)

        const scrollTarget = (1 / (ART_PIECES.length - 1)) * selectedPiece

        scrollCurrentFrame.current += 1
        const time = scrollCurrentFrame.current / 160

        if (time <= 1) {
          scroll.offset = lerp(scroll.offset, scrollTarget, time)
        } else {
          scroll.offset = scrollTarget
        }
      } else {
        t.camera.position.z = lerp(t.camera.position.z, 13, 0.05)

        const rotX = lerp(t.camera.rotation.x, t.mouse.y / 30, 0.05)
        const rotY = lerp(t.camera.rotation.y, -t.mouse.x / 30, 0.05)
        // const rotY = lerp(t.camera.rotation.y, Math.PI / 10, 0.05)
        const posX = lerp(t.camera.position.x, 0, 0.05)

        t.camera.position.x = posX
        t.camera.rotation.x = rotX
        t.camera.rotation.y = rotY
      }
    }
  })

  return <></>
}

const Scene = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const { width: w, height: h } = useThree((state) => state.viewport)

  // const canvasSize = useThree((state) => state.size)

  const { selectedPiece, setSelectedPiece } = useArtStore()

  useEffect(() => {
    setSelectedPiece(null)

    return () => {
      setSelectedPiece(null)
    }
  }, [setSelectedPiece])

  return (
    <Suspense
      fallback={
        <Html style={{ fontSize: '6vw', whiteSpace: 'nowrap' }} center>
          Wait a sec...
        </Html>
      }
    >
      {/* <OrbitControls /> */}

      <ScrollControls
        pages={ART_PIECES.length} // Each page takes 100% of the height of the canvas
        distance={0.5} // A factor that increases scroll bar travel (default: 1)
        damping={2} // Friction, higher is faster (default: 4)
        horizontal={!isMobile}
        enabled={selectedPiece == null}
      >
        <CameraRig />
        <Scroll>
          {ART_PIECES.map((piece, i) => (
            <ArtPiece
              key={i}
              image={piece.imgPath}
              title={piece.title}
              index={i}
            />
          ))}
          <ambientLight intensity={0.5} color={0xffccaa} />
        </Scroll>

        <Scroll html>
          <div className={styles.wrapper}>
            {ART_PIECES.map((piece, i) => (
              <section className={styles.item} key={i}>
                <AnimatePresence>
                  {selectedPiece === i && (
                    <>
                      <motion.h1
                        key={'title-' + i}
                        id={piece.title}
                        className={styles.title}
                        initial={{
                          opacity: 0,
                          y: 100,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 100,
                        }}
                        transition={{
                          type: 'spring',
                          damping: 10,
                          delay: 0.3,
                        }}
                      >
                        {piece.title}
                      </motion.h1>
                      <motion.span
                        initial={{
                          opacity: 0,
                          y: 100,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 100,
                        }}
                        transition={{
                          type: 'spring',
                          damping: 10,
                          delay: 0.5,
                        }}
                      >
                        $14.99
                      </motion.span>
                    </>
                  )}
                </AnimatePresence>
              </section>
            ))}
          </div>
        </Scroll>

        <mesh
          position={[0, 0, -0.1]}
          receiveShadow
          onClick={() => setSelectedPiece(null)}
        >
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
        <title>Art gallery | Shitty examples by @andreuscafe</title>
        <meta
          name="description"
          content="3D Art gallery demo using react-three-fiber."
        />
      </Head>

      <Canvas
        style={{ position: 'fixed' }}
        camera={{
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
