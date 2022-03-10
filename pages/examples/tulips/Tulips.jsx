import React from 'react'
import styles from './Tulips.module.scss'
import { useEffect } from 'react'
import { useAppContext } from '../../../context/AppContext'
import Head from 'next/head'
import { useSelect } from 'rooks'
import BorningTulip from '../../../components/tulips/BorningTulip'
import BorningTulipBounce from '../../../components/tulips/BorningTulipBounce'
import IdleTulip from '../../../components/tulips/IdleTulip'

const TULIPS = [
  {
    heading: 'Borning with bounce',
    component: <BorningTulipBounce />,
  },
  {
    heading: 'Borning',
    component: <BorningTulip />,
  },
  {
    heading: 'Idle',
    component: <IdleTulip />,
  },
]

export default function ScrollVideo() {
  const { setCurrentExample } = useAppContext()
  const { index, setIndex, item } = useSelect(TULIPS, 0)

  useEffect(() => {
    setCurrentExample({
      title: 'Tulipmaniacs animations preview',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/tulips/Tulips.jsx',
    })
  }, [setCurrentExample])

  return (
    <>
      <Head>
        <title>Tulips | Shitty examples by @andreuscafe</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.tulipsList}>
          {TULIPS.map((listItem, listItemIndex) => (
            <button
              key={listItemIndex}
              style={{
                background: index === listItemIndex ? 'dodgerblue' : 'inherit',
              }}
              onClick={() => setIndex(listItemIndex)}
            >
              {listItem.heading}
            </button>
          ))}
        </div>

        {item.component}
      </div>
    </>
  )
}
