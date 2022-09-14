import { AppProps } from 'next/app'
import Header from '../components/header/index'
import Footer from 'components/footer'
import Image from 'next/image'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
          <Image src={`/images/black.jpeg`} layout={`fill`} objectFit={`cover`} alt={`back-image`} />
        </div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
