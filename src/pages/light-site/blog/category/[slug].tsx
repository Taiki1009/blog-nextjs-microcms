import { GetStaticPropsContext } from 'next'
import { getPlaiceholder } from 'plaiceholder'
import { getAllCategories, getAllPostsByCategory } from '@Libs/client'
import { defaultEyeCatch } from '@Libs/constants'
import Container from '@LightSiteComponents/container'
import Meta from '@LightSiteComponents/meta'
import PostHeader from '@LightSiteComponents/post-header'
import Posts from '@LightSiteComponents/posts'
import { BlogTypes } from 'types/blog'
import { CategoriesTypes } from 'types/category'

type CategoryProps = CategoriesTypes & {
  posts: BlogTypes[]
}

const Category = ({ name, posts }: CategoryProps) => {
  return (
    <Container>
      <Meta pageTitle={name} pageDescription={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="Blog category" />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories()

  return {
    paths: allCategories.map(
      ({ slug }: { slug: string }) => `/light-site/blog/category/${slug}`,
    ),
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const currentSlug = context.params?.slug
  const allCategories = await getAllCategories()
  const currentCategory = allCategories.find(
    ({ slug }: { slug: string }) => slug === currentSlug,
  )
  const posts = await getAllPostsByCategory(currentCategory.id)

  for (const post of posts) {
    if (!Object.prototype.hasOwnProperty.call(post, 'eyeCatch')) {
      post.eyeCatch = defaultEyeCatch
    }
    const base64Data = await getPlaiceholder(post.eyeCatch.url)
    post.eyeCatch.blurDataURL = base64Data
  }

  return {
    props: {
      name: currentCategory.name,
      posts: posts,
    },
  }
}

export default Category
