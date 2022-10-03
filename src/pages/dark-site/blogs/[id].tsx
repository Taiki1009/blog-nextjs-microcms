import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import { client } from '@Libs/client'
import styles from 'styles/Home.module.scss'
import { BlogTypes } from 'types/blog'

export type ApiContext = {
  apiRootUrl: string
}

const BlogId = (
  props: Pick<BlogTypes, 'title' | 'content' | 'publishDate'>,
) => {
  const { title, content, publishDate } = props
  const publishedAt = () => {
    const date = new Date(publishDate)
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  }

  return (
    <main className="mt-16 mb-20 mx-auto w-4/5">
      <h1 className="mb-10 text-4xl font-bold">{title}</h1>
      <p className="mb-10 text-right">投稿日: {publishedAt()}</p>
      <div
        dangerouslySetInnerHTML={{ __html: `${content}` }}
        className={styles.post}
      ></div>
    </main>
  )
}

//SSG
export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params) {
    throw new Error('params is undefined')
  }

  const id = String(params.id)
  const post = await client.get({ endpoint: 'blogs', contentId: id })

  return {
    props: {
      title: post.title,
      content: post.content,
      publishDate: post.publishDate,
    },
  }
}

// DynamicRouter
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' })
  const paths = data.contents.map(
    (content: BlogTypes) => `/dark-site/blogs/${content.id}`,
  )

  return {
    paths,
    fallback: false,
  }
}

export default BlogId
