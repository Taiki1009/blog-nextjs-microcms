import Image from 'next/image'
import styles from './hero.module.css'
import { HeroProps } from './heroTypes'
import cube from 'images/cube.jpg'

const Hero = ({ title, subtitle, imageOn = false }: HeroProps) => {
  console.log(cube)
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure>
          {/* <Image
            src={cube.src}
            alt="image"
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority // この画像読み込みを優先
            placeholder="blur"
            blurDataURL={cube.blurDataURL}
          /> */}
          <Image
            src={cube.src}
            alt="image"
            layout="responsive"
            width={cube.width}
            height={cube.height}
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
            blurDataURL={cube.blurDataURL}
          />
        </figure>
      )}
    </div>
  )
}

export default Hero
