import Link from 'next/link'
import styles from 'styles/lightSite/nav.module.scss'

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/lightSite">
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
      </ul>
    </nav>
  )
}

export default Nav
