import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import { useAppContext } from '../context/AppContext'

const EXAMPLES = [
  {
    title: 'Scroll controlled video',
    description: 'Using react-scrollmagic to set video.currentTime',
    path: '/examples/scroll-video',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/scroll-video/ScrollVideo.jsx',
  },
]

export default function Home() {
  const { setCurrentExample } = useAppContext()

  useEffect(() => {
    setCurrentExample({})
  }, [setCurrentExample])

  return (
    <>
      <Head>
        <title>Shitty examples by @andreuscafe</title>
        <meta name="description" content="CSS and JS creative examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Shitty examples</h1>

        <div className={styles.description}>
          By{' '}
          <a
            href="https://twitter.com/AndreusCafe"
            target="_blank"
            rel="noopener noreferrer"
          >
            @andreuscafe
          </a>
        </div>

        <div className={styles.grid}>
          {EXAMPLES.map((example, i) => (
            <Link href={example.path} key={i}>
              <a className={styles.card}>
                <h2>{example.title}</h2>
                <p>{example.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
