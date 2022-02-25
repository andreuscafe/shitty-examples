import Link from 'next/link'
import { useCallback } from 'react'
import styles from './Footer.module.scss'
import { setCSSVariable } from '../../utils'

export const Footer = () => {
  const toggleColor = useCallback(() => {
    const colorPref = localStorage.getItem('color')

    if (colorPref && colorPref === 'white') {
      setCSSVariable('background', 'var(--black)')
      setCSSVariable('foreground', 'var(--white)')
      localStorage.setItem('color', 'dark')
    } else {
      setCSSVariable('background', 'var(--white)')
      setCSSVariable('foreground', 'var(--black)')
      localStorage.setItem('color', 'white')
    }
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.linkWrapper}>
        <Link href="https://twitter.com/AndreusCafe">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.twitterLink}
          >
            @andreuscafe
          </a>
        </Link>
      </div>

      <button className={styles.toggleColorModeButton} onClick={toggleColor}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1792 1792"
          fill="currentColor"
        >
          <script xmlns="" />
          <path d="M896 1440v-1088q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73zm768-544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
        </svg>
      </button>
    </footer>
  )
}
