import { useEffect } from 'react'
import { setCSSVariable } from '../../utils'
import Footer from '../Footer'
import Header from '../Header'
import styles from './Layout.module.scss'

export function Layout({ children }) {
  useEffect(() => {
    const colorPref = localStorage.getItem('color')

    if (!colorPref) {
      localStorage.setItem('color', 'white')
    } else {
      if (colorPref === 'dark') {
        setCSSVariable('background', 'var(--black)')
        setCSSVariable('foreground', 'var(--white)')
      } else if (colorPref === 'white') {
        setCSSVariable('background', 'var(--white)')
        setCSSVariable('foreground', 'var(--black)')
      }
    }
  }, [])

  return (
    <div className={styles.layoutWrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
