import Social from './social'
import Container from '@LightSiteComponents/layouts/container'
import Logo from '@LightSiteComponents/layouts/logo'
import styles from 'styles/lightSite/footer.module.css'

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
