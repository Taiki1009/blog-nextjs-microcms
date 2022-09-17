import {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next'
import PropTypes from 'prop-types'
import { client } from '../../../libs/client'
import styles from 'styles/Home.module.scss'
import { Blog } from 'types/blog'

export type ApiContext = {
  apiRootUrl: string
}

type BlogPageProps = InferGetStaticPropsType<typeof getStaticProps>

const BlogId: NextPage<BlogPageProps> = ({
  blog: { title, content, publishedAt },
}) => {
  const publishDate = () => {
    const date = new Date(publishedAt)
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
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
export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params) {
    throw new Error('params is undefined')
  }

  const id = String(params.id)
  const data = await client.get({ endpoint: 'blogs', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}

// DynamicRouter
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' })
  const paths = data.contents.map((content: Blog) => `/blogs/${content.id}`)

  return {
    paths,
    fallback: false,
  }
}

BlogId.propTypes = {
  blog: PropTypes.object,
}

export default BlogId
