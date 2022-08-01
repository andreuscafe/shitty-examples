import React, { useEffect, useRef, useLayoutEffect, Suspense } from 'react'
import styles from './SplineBackground.module.scss'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
})

const variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

export default function SplineBackground() {
  const { setCurrentExample } = useAppContext()

  useEffect(() => {
    setCurrentExample({
      title: 'Spline',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/mural-painting/SplineBackground.jsx',
    })
    document.body.style.overflow = 'hidden'
    document.body.style.backgroundColor = '#000000'
    document.body.style.color = '#ffffff'

    return () => (document.body.style.overflow = 'auto')
  }, [setCurrentExample])

  return (
    <>
      <Head>
        <title>Spline Background | Shitty examples by @andreuscafe</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.splineWrapper}>
          <Spline scene="https://prod.spline.design/VNzctMdR5Rwr2Zcc/scene.splinecode" />
        </div>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            <span className={styles.titleSpan}>Shitty</span>
            <br />
            <span className={styles.titleSpan} style={{ '--delay': '1.3s' }}>
              Examples
            </span>
          </h1>
        </div>
      </div>
    </>
  )
}
