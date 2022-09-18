import styles from 'styles/lightSite/container.module.css'

const Container = ({ children, large = false }: any) => {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}

export default Container
