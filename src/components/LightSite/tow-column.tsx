import styles from 'styles/lightSite/tow-column.module.css'

// MainとSidebarをメソッドとして使用するため、アロー関数ではなく、functionとして定義。
function TowColumn({ children }: any) {
  return <div className={styles.flexContainer}>{children}</div>
}

TowColumn.TowColumnMain = function Main({ children }: any) {
  return <div className={styles.main}>{children}</div>
}

TowColumn.TowColumnSidebar = function Sidebar({ children }: any) {
  return <div className={styles.sidebar}>{children}</div>
}

export default TowColumn
