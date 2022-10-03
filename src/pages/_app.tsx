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
  const currentPath = router.pathname

  return /light-site/.test(currentPath) ? (
    <LightSiteLayout>
      <Component {...pageProps} />
    </LightSiteLayout>
  ) : /dark-site/.test(currentPath) ? (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  ) : (
    <LightSiteLayout>
      <Component {...pageProps} />
    </LightSiteLayout>
  )
}

export default MyApp
