import Container from '@LightSiteComponents/container/index'
import Hero from '@LightSiteComponents/hero/index'
import Meta from '@LightSiteComponents/meta/index'

const LightSiteHome = () => {
  return (
    <Container>
      <Meta />
      <Hero title={'CUBE'} subtitle={'アウトプットしていくサイト'} imageOn />
    </Container>
  )
}

export default LightSiteHome
