import React, { useEffect, useRef, useLayoutEffect } from 'react'
import styles from './MuralPainting.module.scss'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'

export default function MuralPainting() {
  const { setCurrentExample } = useAppContext()
  const canvasRef = useRef(null)
  const state = useRef({
    radius: 20,
    mouse: {
      x: 0,
      y: 0,
    },
  })

  useEffect(() => {
    setCurrentExample({
      title: 'Mural painting',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/mural-painting/MuralPainting.jsx',
    })
    // document.body.style.overflow = 'hidden'

    // return () => (document.body.style.overflow = 'auto')
  }, [setCurrentExample])

  const fixAndPaintCanvas = () => {
    canvasRef.current.width = document.documentElement.clientWidth
    canvasRef.current.height = document.documentElement.clientHeight

    // const ctx = canvasRef.current.getContext('2d')

    // // ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
    // // ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)
  }

  useLayoutEffect(() => {
    fixAndPaintCanvas()

    window.onresize = () => {
      fixAndPaintCanvas()
    }
  }, [])

  const drawBall = (x, y, radius) => {
    const ctx = canvasRef.current.getContext('2d'),
      canvas = canvasRef.current

    // ctx.beginPath()
    // ctx.fillStyle = '#ffffff'
    // ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    // ctx.fill()

    ctx.beginPath()
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.clip()

    // Draw stuff that gets clipped
    ctx.fillStyle = 'blue'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  const mouseMove = (e) => {
    const { clientX: x, clientY: y } = e

    drawBall(x, y, 300)
  }

  return (
    <>
      <Head>
        <title>Mural Painting | Shitty examples by @andreuscafe</title>
      </Head>
      <div className={styles.wrapper}>
        <canvas
          ref={canvasRef}
          id="canvas"
          className={styles.canvas}
          onMouseMove={mouseMove}
        ></canvas>
      </div>
    </>
  )
}
