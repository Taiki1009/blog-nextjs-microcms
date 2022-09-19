import Footer from './footer'
import Header from './header'

interface LayoutProps {
  children: React.ReactNode
}

// [FIXME] ページコンポーネントの型定義
const LightSiteLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LightSiteLayout
