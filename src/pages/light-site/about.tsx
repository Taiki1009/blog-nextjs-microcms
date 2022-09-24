import Image from 'next/image'
import Accordion from '@LightSiteComponents/accordion'
import Contact from '@LightSiteComponents/contact/index'
import Container from '@LightSiteComponents/container/index'
import Hero from '@LightSiteComponents/hero/index'
import Meta from '@LightSiteComponents/meta/index'
import PostBody from '@LightSiteComponents/post-body/index'
import TowColumn from '@LightSiteComponents/tow-column/index'
import AboutImg from 'images/about.jpg'

const About = () => {
  return (
    <Container>
      <Meta
        pageTitle="ABOUT"
        pageDescription="About development activities"
        pageImg={AboutImg.src}
        pageImgW={AboutImg.width}
        pageImgH={AboutImg.height}
      />

      <Hero title={'About'} subtitle={'About development activities'} />

      <figure>
        <Image
          src={AboutImg}
          alt="image"
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>

      <TowColumn>
        <TowColumn.Main>
          <PostBody>
            <p>
              Cubeが得意とする分野はものづくりです。3次元から2次元の造形、プログラミングやデザインなど、
              さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>ものづくりで目指してること</h2>
            <p>
              ものづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。
              たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけではなく、作る過程や、なぜそのようにしたのかを大事にしながらモノづくりをしています。
              毎回課題解決テーマを持って「もの」と向き合い政策をし、フィードバックをしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出してます。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
              今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、いいも斧を作れるようにしています。
              小さなヒントから新しいものを生み出すような物作りは、これからも続けていきたいです。
            </p>

            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かっていさまざまな課題を設定していきながら、プログラムを作っていきます。
              </p>
            </Accordion>
            <Accordion heading="古代語の解釈について">
              <p>
                古代語を解読するのに必要なのは、書かれた文字そのものだけです。古代の世界観や思考方法。それらを読み取ってこそ古代の世界観が理解できてきます。
              </p>
            </Accordion>
            <Accordion heading="公開リポジトリの活用について">
              <p>
                公開リポジトリを活用すると、全世界のどこからでもアクセスし、開発者が関連するプロジェクトのタスクを利用することができます。
              </p>
            </Accordion>
          </PostBody>
        </TowColumn.Main>

        <TowColumn.Sidebar>
          <Contact />
        </TowColumn.Sidebar>
      </TowColumn>
    </Container>
  )
}

export default About
