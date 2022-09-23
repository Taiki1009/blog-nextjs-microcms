import Social from './layouts/social'
import styles from 'styles/lightSite/contact.module.css'

const Contact = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="40px" />
      <address>cube@web.mail.address</address>
    </div>
  )
}

export default Contact
