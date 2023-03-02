import React, { useEffect, useRef } from 'react'
import styles from './Dvd.module.scss'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'
import { useRaf } from 'rooks'

const SETTINGS = {
  speed: 1.5,
}

const DvdSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 210 107"
    fill="currentColor"
  >
    <script xmlns="" />
    <path d="M118.895,20.346c0,0-13.743,16.922-13.04,18.001c0.975-1.079-4.934-18.186-4.934-18.186s-1.233-3.597-5.102-15.387H81.81H47.812H22.175l-2.56,11.068h19.299h4.579c12.415,0,19.995,5.132,17.878,14.225c-2.287,9.901-13.123,14.128-24.665,14.128H32.39l5.552-24.208H18.647l-8.192,35.368h27.398c20.612,0,40.166-11.067,43.692-25.288c0.617-2.614,0.53-9.185-1.054-13.053c0-0.093-0.091-0.271-0.178-0.537c-0.087-0.093-0.178-0.722,0.178-0.814c0.172-0.092,0.525,0.271,0.525,0.358c0,0,0.179,0.456,0.351,0.813l17.44,50.315l44.404-51.216l18.761-0.092h4.579c12.424,0,20.09,5.132,17.969,14.225c-2.29,9.901-13.205,14.128-24.75,14.128h-4.405L161,19.987h-19.287l-8.198,35.368h27.398c20.611,0,40.343-11.067,43.604-25.288c3.347-14.225-11.101-25.293-31.89-25.293h-18.143h-22.727C120.923,17.823,118.895,20.346,118.895,20.346L118.895,20.346z" />
    <path d="M99.424,67.329C47.281,67.329,5,73.449,5,81.012c0,7.558,42.281,13.678,94.424,13.678c52.239,0,94.524-6.12,94.524-13.678C193.949,73.449,151.664,67.329,99.424,67.329z M96.078,85.873c-11.98,0-21.58-2.072-21.58-4.595c0-2.523,9.599-4.59,21.58-4.59c11.888,0,21.498,2.066,21.498,4.59C117.576,83.801,107.966,85.873,96.078,85.873z" />
  </svg>
)

export default function Dvd() {
  const { setCurrentExample } = useAppContext()

  useEffect(() => {
    setCurrentExample({
      title: 'DVD',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/dvd/Dvd.jsx',
    })
  }, [setCurrentExample])

  const logoRef = useRef(null)
  const wrapperRef = useRef(null)

  const positionRef = useRef({
    x: 0,
    y: 0,
  })

  const directionRef = useRef({
    x: 0,
    y: 0,
  })

  useRaf(() => {
    if (!logoRef.current || !wrapperRef.current) {
      return
    }

    const { clientWidth: wrapperWidth, clientHeight: wrapperHeight } =
      wrapperRef.current
    const { clientWidth: logoWidth, clientHeight: logoHeight } = logoRef.current

    // if logo is at the left edge, change direction to right
    // otherwise if logo is at the right edge, change direction to left.
    if (positionRef.current.x <= 0) {
      directionRef.current.x = SETTINGS.speed
    } else if (positionRef.current.x + logoWidth >= wrapperWidth) {
      if (positionRef.current.x + logoWidth > wrapperWidth) {
        // correct position if logo is out of bounds
        positionRef.current.x = wrapperWidth - logoWidth
      }

      directionRef.current.x = -SETTINGS.speed
    }

    // if logo is at the top edge, change direction to bottom
    // otherwise if logo is at the bottom edge, change direction to top
    if (positionRef.current.y <= 0) {
      directionRef.current.y = SETTINGS.speed
    } else if (positionRef.current.y + logoHeight >= wrapperHeight) {
      if (positionRef.current.y + logoHeight > wrapperHeight) {
        // correct position if logo is out of bounds
        positionRef.current.y = wrapperHeight - logoHeight
      }

      directionRef.current.y = -SETTINGS.speed
    }

    // Update position
    positionRef.current.x += directionRef.current.x
    positionRef.current.y += directionRef.current.y

    logoRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`
  }, true)

  return (
    <>
      <Head>
        <title>Dvd | Shitty examples by @andreuscafe</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.dvdWrapper} ref={wrapperRef}>
          <div className={styles.dvd} ref={logoRef}>
            <DvdSvg />
          </div>
        </div>
      </div>
    </>
  )
}
