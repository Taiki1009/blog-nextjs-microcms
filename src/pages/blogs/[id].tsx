import { client } from "../../../libs/client";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Blog } from "types/blog";
import styles from "../../../styles/Home.module.scss";

type BlogProps = {
  blog: Blog
}

const BlogId: NextPage<BlogProps> = (props) => {
  const { title, content, publishedAt } = props.blog
  const publishDate = () => {
    let date = new Date(publishedAt)
    return (`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`)
  }

  return (
    <main className="mt-16 mb-20 mx-auto w-4/5">
      <h1 className="mb-10 text-4xl font-bold">{title}</h1>
      <p className="mb-10 text-right">投稿日: {publishDate()}</p>
      <div
        dangerouslySetInnerHTML={{ __html: `${content}` }}
        className={styles.post}
      ></div>
    </main>
  )
}

//SSG
// [FIXME contextの型定義
export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await client.get({ endpoint: "blogs", contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}

// DynamicRouter
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" })
  const paths = data.contents.map((content: Blog) => `/blogs/${content.id}`)

  return {
    paths,
    fallback: false,
  }
}

export default BlogId
