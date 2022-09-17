import Header from "./header";
import Footer from "./footer";

// [FIXME] ページコンポーネントの型定義
const LightSiteLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LightSiteLayout
