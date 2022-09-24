import styles from './tow-column.module.css'
import { TowColumnProps } from './towColumnTypes'

// MainとSidebarをメソッドとして使用するため、アロー関数ではなく、functionとして定義。
function TowColumn({ children }: TowColumnProps) {
  return <div className={styles.flexContainer}>{children}</div>
}

TowColumn.Main = function Main({ children }: TowColumnProps) {
  return <div className={styles.main}>{children}</div>
}

TowColumn.Sidebar = function Sidebar({ children }: TowColumnProps) {
  return <div className={styles.sidebar}>{children}</div>
}

export default TowColumn
