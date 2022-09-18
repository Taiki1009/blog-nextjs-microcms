import Link from 'next/link'
import styles from 'styles/lightSite/nav.module.css'

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/lightSite/home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/lightSite/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/lightSite/blog">
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
