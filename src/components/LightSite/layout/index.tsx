import { LayoutProps } from './layoutTypes'
import Footer from '@LightSiteComponents/footer/index'
import Header from '@LightSiteComponents/header/index'

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
