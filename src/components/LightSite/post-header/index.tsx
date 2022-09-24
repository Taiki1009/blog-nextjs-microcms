import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './post-header.module.css'
import { PostHeaderProps } from './postHeaderTypes'

const PostHeader = ({ title, subtitle, publish = '' }: PostHeaderProps) => {
  const publishDate = () => {
    const date = new Date(publish)
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }

  return (
    <div>
      <p className={styles.stack}>{subtitle}</p>
      <h1 className={styles.title}>{title}</h1>
      {publish && (
        <div className={styles.publish}>
          <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
          {publishDate()}
        </div>
      )}
    </div>
  )
}

export default PostHeader
