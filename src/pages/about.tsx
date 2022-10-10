import Image from 'next/image'
// import Accordion from '@LightSiteComponents/accordion'
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
            <h2>Taiです</h2>
            <p>
              Railsエンジニア2年目。React, TypeScript, Next.js,
              microCMSの学習サイト
            </p>
            <p>
              業務ではバックエンドを触っていて、フロントに興味が出てきたので勉強中。
              個人開発や学習したことを中心に発信していく予定です。
            </p>
            <br />
            <p>「作って学ぶNext.js/React Webサイト構築」を参考に作成</p>

            <h3>やりたいこと</h3>
            <p>- バックエンド開発は業務で困らないくらいまで頑張る。</p>
            <p>- フロントエンドは副業できるくらいまで頑張る。</p>
            <p>- 英語は仕事・プライベート共に困らないくらいにはなりたい。</p>

            {/* <h2>FAQ</h2>
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
            </Accordion> */}
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
