import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from 'styles/lightSite/post-header.module.css'

type Props = {
  title: string
  subtitle: string
  publish: string
}

const PostHeader = ({ title, subtitle, publish = '' }: Props) => {
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
