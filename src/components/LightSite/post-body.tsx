import styles from 'styles/lightSite/post-body.module.css'

interface Props {
  children: React.ReactNode
}

const PostBody = ({ children }: Props) => {
  return <div className={styles.stack}>{children}</div>
}

export default PostBody
