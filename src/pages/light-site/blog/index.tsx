import Hero from '@LightSiteComponents/hero'
import Container from '@LightSiteComponents/layouts/container'
import Meta from '@LightSiteComponents/layouts/meta'

const Blog = () => {
  return (
    <Container>
      <Meta pageTitle="BLOG" pageDesc="ブログ記事一覧" />
      <Hero title={'Blog'} subtitle={'Recent Posts'} />
    </Container>
  )
}

export default Blog
