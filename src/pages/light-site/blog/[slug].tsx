import { GetStaticPropsContext } from 'next'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import { getPostBySlug, getAllSlugs } from '@Libs/client'
import { defaultEyeCatch } from '@Libs/constants'
import extractText from '@Libs/extract-text'
import { prevNextPost } from '@Libs/prev-next-post'
import Container from '@LightSiteComponents/container/index'
import Meta from '@LightSiteComponents/meta/index'
import Pagination from '@LightSiteComponents/pagination/index'
import PostBody from '@LightSiteComponents/post-body/index'
import PostCategories from '@LightSiteComponents/post-categories/index'
import PostHeader from '@LightSiteComponents/post-header/index'
import TwoColumn from '@LightSiteComponents/tow-column/index'
import { BlogTypes } from 'types/blog'

type PostProps = BlogTypes & {
  prevPost: BlogTypes
  nextPost: BlogTypes
}

const Post = (props: PostProps) => {
  const {
    title,
    publishDate,
    content,
    eyeCatch,
    categories,
    description,
    prevPost,
    nextPost,
  } = props

  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDescription={description}
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
              key={eyeCatch.url}
              src={eyeCatch.url}
              alt="image"
              layout="responsive"
              width={eyeCatch.width}
              height={eyeCatch.height}
              sizes="(min-width: 1152px) 1152px, 100vw"
              priority
              placeholder="blur"
              blurDataURL={eyeCatch.blurDataURL}
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
        <Pagination
          prevText={prevPost.title}
          prevUrl={`light-site/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`light-site/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()
  // console.log(allSlugs)

  return {
    paths: allSlugs.map(
      ({ slug }: { slug: string }) => `/light-site/blog/${slug}`,
    ),
    // fallbackを'blocking'やtrueにした場合は、取得したページ以外はSSRと同様の処理になる
    fallback: false,
  }
}

// contextで全てのblogのpathを受け取る
export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug
  const post = await getPostBySlug(String(slug))

  if (!post) {
    return { notFound: true }
  } else {
    const description = extractText(post.content)

    // eyeCatchがない場合はデフォルト画像を渡す
    const eyeCatch = post.eyeCatch ?? defaultEyeCatch
    const base64Data = await getPlaiceholder(eyeCatch.url)
    eyeCatch.blurDataURL = base64Data
    // console.log(post.categories)

    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs, String(slug))

    return {
      props: {
        title: post.title,
        publishedAt: post.publishDate,
        content: post.content,
        eyeCatch: eyeCatch,
        categories: post.categories,
        description: description,
        prevPost: prevPost,
        nextPost: nextPost,
      },
    }
  }
}

export default Post
