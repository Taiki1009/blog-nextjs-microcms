import { getPlaiceholder } from 'plaiceholder'
import { getAllPosts } from '@Libs/client'
import { defaultEyeCatch } from '@Libs/constants'
import Container from '@LightSiteComponents/container/index'
import Hero from '@LightSiteComponents/hero/index'
import Meta from '@LightSiteComponents/meta/index'
import Pagination from '@LightSiteComponents/pagination'
import Posts from '@LightSiteComponents/posts'
import { BlogTypes } from 'types/blog'

const Home = ({ posts }: { posts: BlogTypes[] }) => {
  return (
    <Container>
      <Meta pageTitle="Home" />
      <Hero title={'Home'} subtitle={'アウトプットしていくサイト'} imageOn />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(3) // トップページは3件のみ表示する

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

export default Home
