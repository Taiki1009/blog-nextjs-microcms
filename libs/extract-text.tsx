import { convert } from 'html-to-text'

const extractText = (html: string, length = 80, more = '...') => {
  const options = {
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { ignoreHref: true } },
    ],
  }
  const text = convert(html, options)

  return text.slice(0, length) + more
}

export default extractText
