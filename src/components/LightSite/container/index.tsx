import styles from './container.module.css'
import { ContainerProps } from './containerTypes'

const Container = ({ children, large = false }: ContainerProps) => {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}

export default Container
