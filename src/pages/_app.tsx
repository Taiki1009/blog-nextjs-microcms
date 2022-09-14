import { AppProps } from 'next/app'
import Header from '../components/header/index'
import Footer from 'components/footer'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
