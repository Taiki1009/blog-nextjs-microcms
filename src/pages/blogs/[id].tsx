import { client } from "../../../libs/client";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Blog } from "types/blog";
import styles from "../../../styles/Home.module.scss";

type BlogProps = {
  blog: Blog
}

const BlogId: NextPage<BlogProps> = (props) => {
  const { title, content, publishedAt } = props.blog

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.publishedAt}>{publishedAt}</p>
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
