import Link from 'next/link'
import styles from './nav.module.css'

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/light-site/home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/light-site/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/light-site/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>darkSite</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
