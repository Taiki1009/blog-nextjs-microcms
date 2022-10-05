import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './social.module.css'
import { SocialProps } from './socialTypes'

const Social = ({ iconSize = 'initial' }: SocialProps) => {
  const style = { '--icon-size': iconSize } as React.CSSProperties

  return (
    <>
      <ul className={styles.list} style={style}>
        <li>
          <a href="https://twitter.com/STai0116">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="sr-only">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Taiki1009">
            <FontAwesomeIcon icon={faGithub} />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
      </ul>
    </>
  )
}

export default Social
