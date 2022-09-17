import Header from "./header";
import Footer from "./footer";
import Image from "next/image";

// [FIXME] 一度通してからTsの方定義を行う
const HomeLayout = ({ children }: any) => {
  return (
    <>
      <Header />
        <div className="min-h-screen">
          <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
            <Image src={`/images/black.jpeg`} layout={`fill`} objectFit={`cover`} alt={`back-image`} />
          </div>
          <main>{children}</main>
        </div>
      <Footer />
    </>
  )
}

export default HomeLayout
