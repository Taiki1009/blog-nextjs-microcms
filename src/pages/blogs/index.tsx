import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { client } from '../../../libs/client'

interface BlogProps {
  id: string
  title: string
}
type BlogPageProps = InferGetStaticPropsType<typeof getStaticProps>

const Blogs: NextPage<BlogPageProps> = (props: BlogPageProps) => {
  const { blogList } = props
  // console.log(blogList)

  return (
    <div className="blogList">
      <h3>投稿一覧</h3>
      {blogList.map((blog: BlogProps) => (
        <li key={blog.id}>
          <Link href={`blogs/${blog.id}`}>
            <a href="">{blog.title}</a>
          </Link>
        </li>
      ))}
    </div>
  )
}

//SSG
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      blogList: data.contents,
    },
  }
}

export default Blogs
