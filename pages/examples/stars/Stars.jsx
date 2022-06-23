import React from 'react'
import styles from './Stars.module.scss'
import { useEffect } from 'react'
import { useAppContext } from '../../../context/AppContext'
import Head from 'next/head'
import { useStore } from '../../../store/store'
import { motion } from 'framer-motion'

export default function Stars() {
  const { setCurrentExample } = useAppContext()
  const { setColorPreference } = useStore.getState()

  useEffect(() => {
    setCurrentExample({
      title: 'Stars',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/stars/Stars.jsx',
    })

    setColorPreference('dark')
  }, [setCurrentExample, setColorPreference])

  return (
    <>
      <Head>
        <title>Stars | Shitty examples by @andreuscafe</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.stars}></div>
        <div className={styles.stars}></div>
        <div className={styles.stars}></div>
        <div className={styles.stars}></div>

        <motion.h1
          className={styles.title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          Estrellitas
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.5 }}
        >
          Que capaz te hacen marear.
        </motion.p>
      </div>
    </>
  )
}
