import Link from 'next/link'
import styles from './logo.module.css'
import { LogoProps } from './logoTypes'

const Logo = ({ boxOn = false }: LogoProps) => {
  return (
    <Link href="/light-site/home">
      <a className={boxOn ? styles.box : styles.basic}>CUBE</a>
    </Link>
  )
}

export default Logo
