import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from 'styles/lightSite/logo.module.css'

const Logo = ({ boxOn = false }) => {
  return (
    <Link href="/light-site/home">
      <a className={boxOn ? styles.box : styles.basic}>CUBE</a>
    </Link>
  )
}

Logo.propTypes = {
  boxOn: PropTypes.bool,
}

export default Logo
