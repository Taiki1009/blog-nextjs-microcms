import styles from './footer.module.css'
import Container from '@LightSiteComponents/container/index'
import Social from '@LightSiteComponents/social/index'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}>
          <p>@2022 Tai</p>
          <Social />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
