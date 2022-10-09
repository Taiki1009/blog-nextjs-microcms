import styles from './contact.module.css'
import Social from '@LightSiteComponents/social/index'

const Contact = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="2x" />
    </div>
  )
}

export default Contact
