import Hero from '@LightSiteComponents/hero'
import Container from '@LightSiteComponents/layouts/container'
import Meta from '@LightSiteComponents/layouts/meta'

const LightSiteHome = () => {
  return (
    <Container>
      <Meta />
      <Hero title={'CUBE'} subtitle={'アウトプットしていくサイト'} imageOn />
    </Container>
  )
}

export default LightSiteHome
