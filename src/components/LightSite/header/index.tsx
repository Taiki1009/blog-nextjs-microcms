import styles from './header.module.css'
import Container from '@LightSiteComponents/container/index'
import Logo from '@LightSiteComponents/logo/index'
import Nav from '@LightSiteComponents/nav/index'

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
