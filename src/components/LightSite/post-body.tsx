import styles from 'styles/lightSite/post-body.module.css'

const PostBody = ({ children }: any) => {
  return <div className={styles.stack}>{children}</div>
}

export default PostBody
