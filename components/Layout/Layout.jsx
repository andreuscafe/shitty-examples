import { useEffect } from 'react'
import { useStore } from '../../store/store'
import { setCSSVariable } from '../../utils'
import Footer from '../Footer'
import Header from '../Header'
import styles from './Layout.module.scss'

export function Layout({ children }) {
  const { colorPreference } = useStore()

  useEffect(() => {
    if (!colorPreference) {
      localStorage.setItem('color', 'light')
    } else {
      if (colorPreference === 'dark') {
        setCSSVariable('background', 'var(--black)')
        setCSSVariable('foreground', 'var(--white)')
      } else if (colorPreference === 'light') {
        setCSSVariable('background', 'var(--white)')
        setCSSVariable('foreground', 'var(--black)')
      }
    }
  }, [colorPreference])

  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
