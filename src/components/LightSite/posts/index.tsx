import Image from 'next/image'
import Link from 'next/link'
import styles from './posts.module.css'
import { BlogTypes } from 'types/blog'

const Posts = ({ posts }: { posts: BlogTypes[] }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyeCatch }: BlogTypes) => (
        <article className={styles.post} key={slug}>
          <Link
            href={`/light-site/blog/${slug}`}
            as={`/light-site/blog/${slug}`}
          >
            <a>
              <figure>
                <Image
                  src={eyeCatch?.url || ''}
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  width={eyeCatch?.width}
                  height={eyeCatch?.height}
                  sizes="(min-width: 1152px) 576px, 50vw"
                  placeholder="blur"
                  blurDataURL={eyeCatch?.blurDataURL}
                />
              </figure>
              <h2>{title}</h2>
            </a>
          </Link>
        </article>
      ))}
    </div>
  )
}

export default Posts
