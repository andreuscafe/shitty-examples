import Link from 'next/link'
import styles from './Footer.module.scss'
import { useStore } from '../../store/store'

export const Footer = () => {
  const toggleColorPreference = useStore((state) => state.toggleColorPreference)

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

      <button
        name="toggle-color"
        className={styles.toggleColorModeButton}
        onClick={toggleColorPreference}
      >
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
