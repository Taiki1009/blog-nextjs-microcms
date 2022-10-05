import Link from 'next/link'
import { useState } from 'react'
import styles from './nav.module.css'

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        // eslint-disable-next-line react/no-unknown-property
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>

      <ul className={styles.list}>
        <li>
          <Link href="/" as="/">
            <a onClick={closeNav}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" as="/about">
            <a onClick={closeNav}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog" as="/blog">
            <a onClick={closeNav}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/dark-site" as="/dark-site">
            <a onClick={closeNav}>darkSite</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
