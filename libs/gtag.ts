export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

// [FIXME] gtag('config'~ でエラーが起きるため使用しない
export const pageview = (url: string) => {
  // window.gtag('config', GA_MEASUREMENT_ID, {
  //   page_path: url,
  // })
}
