import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import { useAppContext } from '../context/AppContext'

const EXAMPLES = [
  {
    title: 'Spline background',
    description: 'Testing react-spline (high gpu use)',
    path: '/examples/spline',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/spline/SplineBackground.jsx',
    new: true,
  },
  // {
  //   title: 'Ideas',
  //   description: 'Ideas that never got materialized',
  //   path: '/examples/ideas',
  //   githubURL:
  //     'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/ideas/Ideas.jsx',
  // },
  {
    title: 'Globe',
    description: 'Threejs Globe',
    path: '/examples/globe',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/globe/index.jsx',
  },
  {
    title: 'Scroll controlled video',
    description: 'Using react-scrollmagic to set video.currentTime',
    path: '/examples/scroll-video',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/scroll-video/ScrollVideo.jsx',
  },
  {
    title: 'The Forest',
    description: '3D scene using react-three-fiber and Drei ScrollControls',
    path: '/examples/the-forest',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/the-forest/TheForest.jsx',
  },
  // {
  //   title: 'Tulip animations',
  //   description: 'SVG animations using framer-motion',
  //   path: '/examples/tulips',
  //   githubURL:
  //     'https://github.com/andreuscafe/shitty-examples/blob/tulip/pages/examples/tulips/Tulips.jsx',
  // },
  {
    title: 'Art gallery',
    description: '3D Art gallery using R3F',
    path: '/examples/art-shelf',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/art-shelf/ArtShelf.jsx',
  },
  {
    title: 'Pipes Game',
    description: '3D pipes game using R3F',
    path: '/examples/pipes-game',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/pipes-game/PipesGame.jsx',
  },
  {
    title: 'Mural painting',
    description: 'Exploring image color painting',
    path: '/examples/mural-painting',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/mural-painting/MuralPainting.jsx',
  },
  {
    title: 'Stars',
    description: 'Stars animation using framer-motion',
    path: '/examples/stars',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/stars/Stars.jsx',
  },
]

export default function Home() {
  const { setCurrentExample } = useAppContext()

  useEffect(() => {
    setCurrentExample({})
    document.body.style.overflow = 'auto'
    document.body.style.backgroundColor = 'var(--background)'
    document.body.style.color = 'var(--foreground)'
  }, [setCurrentExample])

  return (
    <>
      <Head>
        <title>Shitty examples by @andreuscafe</title>
        <meta name="description" content="CSS and JS creative examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.wrapper}>
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
              <a className={`${styles.card} ${example.new ? styles.new : ''}`}>
                <h2>{example.title}</h2>
                <p>{example.description}</p>

                {example.new && (
                  <span className={styles.newTag}>This is new!</span>
                )}
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
