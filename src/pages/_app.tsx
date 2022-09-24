// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css' // Font AwesomeのCSSをインポートして全体に適用
import { config } from '@fortawesome/fontawesome-svg-core' // SVG-COREが個別にCSSを適用するのを無効化
config.autoAddCss

import { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect } from 'react'
import HomeLayout from '@HomeComponents/layouts/layout'
import * as gtag from '@Libs/gtag'
import LightSiteLayout from '@LightSiteComponents/layout/index'
import 'styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  // 複数サイトを扱う予定なので正規表現でpathをチェックする
  const LIGHT_SITE_PATH = /light-site/
  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     if (LIGHT_SITE_PATH.test(url)) {
  //       gtag.pageview(url) // [FIXME] gtagメソッドが使用できないため何もしない
  //     }
  //   }

  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router.events])

  return LIGHT_SITE_PATH.test(router.pathname) ? (
    <>
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com_gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(argument);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_MEASUREMENT_ID}');
          `,
        }}
      /> */}
      <LightSiteLayout>
        <Component {...pageProps} />
      </LightSiteLayout>
    </>
  ) : (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  )
}

export default MyApp
