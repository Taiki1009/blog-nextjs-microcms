import styles from 'styles/lightSite/container.module.css'

interface Props {
  children: React.ReactNode
  large?: boolean
}

const Container = ({ children, large = false }: Props) => {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}

export default Container
