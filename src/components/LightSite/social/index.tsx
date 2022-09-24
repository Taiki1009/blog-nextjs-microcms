import {
  faTwitter,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './social.module.css'
import { SocialProps } from './socialTypes'

const Social = ({ iconSize = 'initial' }: SocialProps) => {
  const style = { '--icon-size': iconSize } as React.CSSProperties

  return (
    <ul className={styles.list} style={style}>
      <li>
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://github.com">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  )
}

export default Social
