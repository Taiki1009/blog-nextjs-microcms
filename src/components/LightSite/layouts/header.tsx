import Container from '@LightSiteComponents/layouts/container'
import Logo from '@LightSiteComponents/layouts/logo'
import Nav from '@LightSiteComponents/layouts/nav'
import styles from 'styles/lightSite/header.module.css'

const Header = () => {
  return (
    <header className="header">
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default Header
