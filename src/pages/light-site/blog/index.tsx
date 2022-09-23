import Container from '@LightSiteComponents/container/index'
import Hero from '@LightSiteComponents/hero/index'
import Meta from '@LightSiteComponents/meta/index'

const Blog = () => {
  return (
    <Container>
      <Meta pageTitle="BLOG" pageDesc="ブログ記事一覧" />
      <Hero title={'Blog'} subtitle={'Recent Posts'} />
    </Container>
  )
}

export default Blog
