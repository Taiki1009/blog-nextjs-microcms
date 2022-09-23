import styles from './footer.module.css'
import Container from '@LightSiteComponents/container/index'
import Logo from '@LightSiteComponents/logo/index'
import Social from '@LightSiteComponents/social/index'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
