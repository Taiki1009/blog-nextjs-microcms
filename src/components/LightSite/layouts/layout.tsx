import Footer from './footer'
import Header from './header'

interface LayoutProps {
  children: React.ReactNode
}

// [FIXME] ページコンポーネントの型定義
const LightSiteLayout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white text-black poppins">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default LightSiteLayout
