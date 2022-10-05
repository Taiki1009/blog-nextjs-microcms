import { getPlaiceholder } from 'plaiceholder'
import { getAllPosts } from '@Libs/client'
import { defaultEyeCatch } from '@Libs/constants'
import Container from '@LightSiteComponents/container/index'
import Hero from '@LightSiteComponents/hero/index'
import Meta from '@LightSiteComponents/meta/index'
import Posts from '@LightSiteComponents/posts'
import { BlogTypes } from 'types/blog'

const Blog = ({ posts }: { posts: BlogTypes[] }) => {
  return (
    <Container>
      <Meta pageTitle="BLOG" pageDescription="ブログ記事一覧" />
      <Hero title={'Blog'} subtitle={'Recent Posts'} />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  // eyeCatchがない場合はデフォルトの画像をセットする
  for (const post of posts) {
    if (!Object.prototype.hasOwnProperty.call(post, 'eyeCatch')) {
      post.eyeCatch = defaultEyeCatch
    }
    const base64Data = await getPlaiceholder(post.eyeCatch.url)
    post.eyeCatch.blurDataURL = base64Data
  }

  return {
    props: {
      posts: posts,
    },
  }
}

export default Blog
