import styles from 'styles/lightSite/tow-column.module.css'

interface Props {
  children?: React.ReactNode
}

// MainとSidebarをメソッドとして使用するため、アロー関数ではなく、functionとして定義。
function TowColumn({ children }: Props) {
  return <div className={styles.flexContainer}>{children}</div>
}

TowColumn.Main = function Main({ children }: Props) {
  return <div className={styles.main}>{children}</div>
}

TowColumn.Sidebar = function Sidebar({ children }: Props) {
  return <div className={styles.sidebar}>{children}</div>
}

export default TowColumn
