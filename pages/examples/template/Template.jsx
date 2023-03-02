import React, { useEffect } from 'react'
import styles from './Template.module.scss'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'

export default function Template() {
  const { setCurrentExample } = useAppContext()

  useEffect(() => {
    setCurrentExample({
      title: 'Template',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/template/Template.jsx',
    })
  }, [setCurrentExample])

  return (
    <>
      <Head>
        <title>Template | Shitty examples by @andreuscafe</title>
      </Head>
      <div className={styles.wrapper}>
        <h1>Template</h1>
      </div>
    </>
  )
}
