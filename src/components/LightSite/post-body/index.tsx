import styles from './post-body.module.css'
import { PostBodyProps } from './postBodyTypes'

const PostBody = ({ children }: PostBodyProps) => {
  return <div className={styles.stack}>{children}</div>
}

export default PostBody
