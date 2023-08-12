import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import { useAppContext } from '../context/AppContext'

const EXAMPLES = [
  {
    title: 'First take on shaders',
    description: 'Using ThreeJS and R3F',
    path: '/examples/simple-shader',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/simple-shader/SimpleShader.jsx',
    new: true,
  },
  // {
  //   title: 'Scroll Reveal Content',
  //   description: 'Using framer-motion',
  //   path: '/examples/scroll-reveal-content',
  //   githubURL:
  //     'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/scroll-reveal-content/ScrollReveal.jsx',
  //   new: false,
  // },
  {
    title: 'DVD',
    description: 'Just a DVD logo bouncing around',
    path: '/examples/dvd',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/dvd/Dvd.jsx',
    new: false,
  },
  {
    title: 'Spline background',
    description: 'Testing react-spline (high gpu use)',
    path: '/examples/spline',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/spline/SplineBackground.jsx',
  },
  // {
  //   title: 'Ideas',
  //   description: 'Ideas that never got materialized',
  //   path: '/examples/ideas',
  //   githubURL:
  //     'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/ideas/Ideas.jsx',
  // },
  {
    title: '3D Globe',
    description: 'Trying Threejs Globe',
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
    notWorking: true,
  },
  {
    title: 'Tulip animations',
    description: 'SVG animations using framer-motion',
    path: '/examples/tulips',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/tulip/pages/examples/tulips/Tulips.jsx',
  },
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
    title: 'Canvas painting',
    description: 'Exploring color painting using canvas',
    path: '/examples/mural-painting',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/mural-painting/MuralPainting.jsx',
    wip: true,
  },
  {
    title: 'Stars',
    description: 'Stars animation using framer-motion',
    path: '/examples/stars',
    githubURL:
      'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/stars/Stars.jsx',
  },
  // {
  //   title: 'Smooth Scroll',
  //   description: 'Trying to make accessible smooth scroll',
  //   path: '/examples/smooth-scroll',
  //   githubURL:
  //     'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/smooth-scroll/SmoothScroll.jsx',
  // },
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
            <Link href={example.path} key={i} legacyBehavior>
              <a className={`${styles.card} ${example.new ? styles.new : ''}`}>
                <h2>{example.title}</h2>
                <p>{example.description}</p>

                {example.new && (
                  <span className={styles.newTag}>This is new!</span>
                )}
                {example.notWorking && (
                  <span className={styles.newTag}>Not working</span>
                )}
                {example.wip && <span className={styles.newTag}>WIP</span>}
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
