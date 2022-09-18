import Link from 'next/link'
import styles from 'styles/lightSite/logo.module.css'

const Logo = ({ boxOn = false }) => {
  return (
    <Link href="/lightSite/" as="/lightSite/">
      <a className={boxOn ? styles.box : styles.basic}>CUBE</a>
    </Link>
  )
}

export default Logo
