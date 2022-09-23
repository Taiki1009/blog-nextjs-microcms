// import Image from 'next/image'
import Footer from './footer'
import Header from './header'

interface LayoutProps {
  children: React.ReactNode
}

// [FIXME] 一度通してからTsの方定義を行う
const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-body text-white poppins">
      <Header />
      <div className="min-h-screen">
        {/* <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
          <Image
            src={`/images/black.jpeg`}
            layout={`fill`}
            objectFit={`cover`}
            alt={`back-image`}
          />
        </div> */}
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default HomeLayout
