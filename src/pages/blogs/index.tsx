import Link from "next/link";
import { client } from "../../../libs/client"
import { GetStaticProps, NextPage } from "next";

interface BlogProps {
  id: string
  title: string
}
type BlogListProps = BlogProps[]

//SSG
export const getStaticProps: GetStaticProps = async (context: any) => {
  const data = await client.get({ endpoint: "blogs" })
  console.log(data)

  return {
    props: {
      blogList: data.contents,
    },
  }
}

const Blogs: NextPage<BlogListProps> = (props: any) => {
  const { blogList } = props

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

export default Blogs
