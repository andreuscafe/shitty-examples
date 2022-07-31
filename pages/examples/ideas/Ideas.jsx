import React from 'react'
import styles from './Ideas.module.scss'
import { useEffect } from 'react'
import { useAppContext } from '../../../context/AppContext'
import Head from 'next/head'
import { useStore } from '../../../store/store'
import { motion } from 'framer-motion'
import Idea from './components/Idea'

export default function Ideas() {
  const { setCurrentExample } = useAppContext()
  const { setColorPreference } = useStore.getState()

  useEffect(() => {
    setCurrentExample({
      title: 'Ideas',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/blobs-background/Ideas.jsx',
      sound: '/sounds/ideas.mp3',
    })
  }, [setCurrentExample, setColorPreference])

  return (
    <>
      <Head>
        <title>Ideas | Shitty examples by @andreuscafe</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.ideasWrapper}>
          <Idea>Fácil viene, fácil se va</Idea>
          <Idea>Depabook</Idea>
          <Idea>Recuérdame</Idea>
          <Idea>Shitty boards</Idea>
          <Idea>Art Drops</Idea>
          <Idea>E-legend.me</Idea>
          <Idea>Portfolio</Idea>
          <Idea>Microlife</Idea>
          <Idea>Chat para boludos</Idea>
          <Idea>Podcast</Idea>
          <Idea>Relatos de Arebalia</Idea>
          <Idea>Tártarus</Idea>
          <Idea>Stickets</Idea>
          <Idea>Razones para permanecer dormido</Idea>
          <Idea>Brisa</Idea>
          <Idea>Stickersby.me</Idea>
        </div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: 0,
            y: 80,
            scale: 0.8,
            transition: { duration: 6, delay: 22 },
          }}
        >
          <motion.h1
            className={styles.title}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 150,
              delay: 2,
            }}
          >
            Ideas
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 150,
              delay: 5,
            }}
          >
            Que aunque nunca vieron la luz
          </motion.p>
          <motion.p
            className={styles.subtitle}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 150,
              delay: 8,
            }}
          >
            me ayudaron a aprender.
          </motion.p>
          <motion.p
            className={styles.subtitle}
            style={{ marginTop: '3rem' }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 150,
              delay: 14,
            }}
          >
            Y hoy en día revolotean por mi cabeza constantemente,
          </motion.p>
          <motion.p
            className={styles.subtitle}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 150,
              delay: 16,
            }}
          >
            recordándome que las dejé morir.
          </motion.p>
        </motion.div>

        <motion.p
          className={styles.subtitle}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 150,
            delay: 154,
          }}
          style={{
            marginTop: '2rem',
            fontSize: '4rem',
            lineHeight: '4rem',
          }}
        >
          Bueno,
        </motion.p>
        <motion.p
          className={styles.subtitle}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 150,
            delay: 154.5,
          }}
          style={{
            marginTop: '1rem',
          }}
        >
          eso nomás te quería contar.
        </motion.p>
      </div>
    </>
  )
}
