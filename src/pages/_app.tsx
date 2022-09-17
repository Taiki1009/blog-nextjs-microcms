import { AppProps } from 'next/app'
import HomeLayout from '@HomeComponents/layouts/layout'
import LightSiteLayout from '@LightSiteComponents/layouts/layout'
import 'styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  // 複数サイトを扱う予定なので正規表現でpathをチェックする
  const lightSitePath = /lightSite/

  return lightSitePath.test(router.pathname) ? (
    <LightSiteLayout>
      <Component {...pageProps} />
    </LightSiteLayout>
  ) : (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  )
}

export default MyApp
