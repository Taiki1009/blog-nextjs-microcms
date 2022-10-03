import { GetStaticProps } from 'next'
import Link from 'next/link'
import { client } from '@Libs/client'
import { BlogTypes } from 'types/blog'

const Blogs = ({
  blogList,
}: {
  blogList: Pick<BlogTypes, 'id' | 'title'>[]
}) => {
  // console.log(blogList)

  return (
    <div className="blogList">
      <h3>投稿一覧</h3>
      {blogList.map((blog) => (
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
