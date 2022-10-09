import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from './social.module.css'
import { SocialProps } from './socialTypes'

// @iconSize SNSアイコンサイズ: ['sm', 'md', 'lg', '2x', '3x', ...] # 参考サイト: https://fontawesome.com/v5/docs/web/style/size
const Social = ({ iconSize = 'md' }: SocialProps) => {
  iconSize = 'fa-' + iconSize

  return (
    <>
      <ul className={styles.list}>
        <li>
          <Link href="https://twitter.com/STai0116" passHref>
            <a href="" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faTwitter} className={iconSize} />
              <span className="sr-only">Twitter</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Taiki1009" passHref>
            <a href="" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faGithub} className={iconSize} />
              <span className="sr-only">GitHub</span>
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Social
