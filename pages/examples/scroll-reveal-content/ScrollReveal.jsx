import React, { useEffect } from 'react'
import styles from './ScrollReveal.module.scss'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'

export default function ScrollReveal() {
  const { setCurrentExample } = useAppContext()

  useEffect(() => {
    setCurrentExample({
      title: 'ScrollReveal',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/scroll-reveal-content/ScrollReveal.jsx',
    })
  }, [setCurrentExample])

  return (
    <>
      <Head>
        <title>ScrollReveal | Shitty examples by @andreuscafe</title>
      </Head>
      <div className={styles.wrapper}>
        <h1>Scroll to reveal animated content</h1>
        <div></div>
      </div>
    </>
  )
}
