import Head from 'next/head'
import { useRouter } from 'next/router'
import { MetaProps } from './metaTypes'
import { siteMeta } from '@Libs/constants'
import siteImg from 'images/ogp.jpg'

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta

const Meta = ({
  pageTitle,
  pageDescription,
  pageImg,
  pageImgW,
  pageImgH,
}: MetaProps) => {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  const desc = pageDescription ?? siteDesc
  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`
  const img = pageImg || siteImg.src
  const imgW = pageImgW || siteImg.width
  const imgH = pageImgH || siteImg.height
  const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`

  return (
    <Head>
      {/* ページタイトル */}
      <title>{title}</title>
      <meta property="og:title" content={title} />

      {/* ページの説明 */}
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      {/* ページのURL */}
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      {/* サイトに関する情報 */}
      <meta property="og:site_name" content="siteTitle" />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      {/* アイコン画像 */}
      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />

      {/* OGP画像 */}
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgW)} />
      <meta property="og:image:height" content={String(imgH)} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default Meta
