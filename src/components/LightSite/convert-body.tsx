// import parse, {
//   attributesToProps,
//   HTMLReactParserOptions,
// } from 'html-react-parser'
// import Image from 'next/image'

// // [FIXME] domNodeのnameとattribsがエラーになるため今回は使用しない
// const options: HTMLReactParserOptions = {
//   replace: (domNode) => {
//     if (domNode instanceof Element && domNode.name === 'img') {
//       const { src, alt, width, height } = attributesToProps(domNode.attribs)
//       return (
//         <Image
//           layout="responsive"
//           src={src}
//           alt={alt}
//           width={width}
//           height={height}
//           sizes="(min-width 768px) 768px, 100vw"
//         />
//       )
//     }
//   },
// }

const ConvertBody = ({ contentHTML }: { contentHTML: string }) => {
  // const contentReact = parse(contentHTML, options)
  // return <>{contentReact}</>
  return <>{contentHTML}</>
}

export default ConvertBody
