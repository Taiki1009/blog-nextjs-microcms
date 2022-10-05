import Link from 'next/link'
import styles from './logo.module.css'
import { LogoProps } from './logoTypes'

const Logo = ({ boxOn = false }: LogoProps) => {
  return (
    <Link href="/" as="/">
      <a className={boxOn ? styles.box : styles.basic}>Tai&apos;s Blog</a>
    </Link>
  )
}

export default Logo
