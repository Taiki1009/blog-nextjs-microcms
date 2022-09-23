// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css' // Font AwesomeのCSSをインポートして全体に適用
import { config } from '@fortawesome/fontawesome-svg-core' // SVG-COREが個別にCSSを適用するのを無効化
config.autoAddCss

import { AppProps } from 'next/app'
import HomeLayout from '@HomeComponents/layouts/layout'
import LightSiteLayout from '@LightSiteComponents/layout/index'
import 'styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  // 複数サイトを扱う予定なので正規表現でpathをチェックする
  const lightSitePath = /light-site/

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
