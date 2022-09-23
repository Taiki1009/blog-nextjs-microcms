import Image from 'next/image'
import { getPostBySlug } from '@Libs/client'
import extractText from '@Libs/extract-text'
import Container from '@LightSiteComponents/container/index'
import Meta from '@LightSiteComponents/meta/index'
import PostBody from '@LightSiteComponents/post-body/index'
import PostCategories from '@LightSiteComponents/post-categories/index'
import PostHeader from '@LightSiteComponents/post-header/index'
import TwoColumn from '@LightSiteComponents/tow-column/index'
import { BlogTypes } from 'types/blog'

const Life = (props: BlogTypes) => {
  const { title, publishDate, content, eyeCatch, categories, description } =
    props

  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyeCatch?.url}
        pageImgW={eyeCatch?.width}
        pageImgH={eyeCatch?.height}
      />
      <article>
        <PostHeader
          title={title}
          subtitle={'Blog Article'}
          publish={publishDate}
        />

        <figure>
          {eyeCatch && (
            <Image
              src={eyeCatch.url}
              alt="image"
              layout="responsive"
              width={eyeCatch.width}
              height={eyeCatch.height}
              sizes="(min-width: 1152px) 1152px, 100vw"
              priority
            />
          )}
        </figure>

        <TwoColumn>
          <TwoColumn.Main>
            <PostBody>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </PostBody>
          </TwoColumn.Main>
          <TwoColumn.Sidebar>
            <PostCategories categories={categories} />
          </TwoColumn.Sidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}

export async function getStaticProps() {
  const slug = 'life'
  const post = await getPostBySlug(slug)
  const description = extractText(post.content)
  // console.log(post.categories)

  return {
    props: {
      title: post.title,
      publishedAt: post.publishDate,
      content: post.content,
      eyeCatch: post.eyeCatch,
      categories: post.categories,
      description: description,
    },
  }
}

export default Life
