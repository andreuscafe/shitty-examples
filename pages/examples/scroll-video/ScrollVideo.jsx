import React from 'react'
import styles from './ScrollVideo.module.scss'
import { Controller, Scene } from 'react-scrollmagic'
import { useEffect, useRef, useState } from 'react'
import { roundFrame } from '../../../utils'
import { useAppContext } from '../../../context/AppContext'
import Head from 'next/head'
import { useRaf } from 'rooks'

export default function ScrollVideo() {
  const { setCurrentExample } = useAppContext()
  const [loaded, setLoaded] = useState(false)

  const videoRef = useRef(null)

  useEffect(() => {
    setCurrentExample({
      title: 'Scroll Controlled Video',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/scroll-video/ScrollVideo.jsx',
    })
  }, [setCurrentExample])

  const videoAnimation = useRef({
    acceleration: 0.001,
    scrollPosition: 0,
    delay: 0,
  })

  useRaf(() => {
    videoAnimation.current.delay +=
      (videoAnimation.current.scrollPosition - videoAnimation.current.delay) *
      videoAnimation.current.acceleration

    // console.log(videoAnimation.current.delay)
    videoRef.current.currentTime = roundFrame(videoAnimation.current.delay)
  }, true)

  return (
    <>
      <Head>
        <title>Scroll video | Shitty examples by @andreuscafe</title>
      </Head>
      <div className={styles.wrapper}>
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
          <Scene pin>
            <div className={styles.title}>Scroll controlled video</div>
          </Scene>

          <div className={styles.spacer}></div>

          <Scene pin duration="50%">
            {(progress, event) => {
              if (loaded && videoRef.current) {
                videoAnimation.current.scrollPosition = roundFrame(
                  progress * videoRef?.current?.duration
                )
              }

              return (
                <div className={styles.videoWrapper}>
                  {event.type} {progress.toFixed(2)}
                  <video
                    preload="metadata"
                    ref={videoRef}
                    onCanPlay={() => setLoaded(true)}
                    // style={{
                    //   filter: `contrast(${progress}) sepia(1)`,
                    // }}
                  >
                    <source src="/videos/tucu.webm#t=0.001" type="video/webm" />
                    <source src="/videos/tucu.mp4#t=0.001" type="video/mp4" />
                  </video>
                </div>
              )
            }}
          </Scene>

          <div className={styles.spacer}></div>
        </Controller>
      </div>
    </>
  )
}
