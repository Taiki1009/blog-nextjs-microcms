import Contact from '@LightSiteComponents/contact'
import Hero from '@LightSiteComponents/hero'
import Container from '@LightSiteComponents/layouts/container'
import PostBody from '@LightSiteComponents/post-body'
import TowColumn from '@LightSiteComponents/tow-column'

const About = () => {
  return (
    <Container>
      <Hero title={'About'} subtitle={'About development activities'} />

      <TowColumn>
        <TowColumn.TowColumnMain>
          <PostBody>
            <h1>鶴の恩返し</h1>
            <p>
              昔、昔あるところにまずしいおじいさんとおばあさんが住んでいました。ある寒い雪の日、
              おじいさんは町へたきぎを売りに出かけた帰り、雪の中に何かが動いているのを見つけました。「あれは何だろう。」
              おじいさんはわなにかかっている一羽の鶴をみつけました。動けば動くほどわなは鶴を締めつけているので、おじいさんはとてもかわいそうに思いました.
            </p>
            <h2>
              「おやおや、かわいそうに、さあさあ、はなしてあげる。これから、気をつけるんだよ。」
            </h2>
            <p>
              そうして鶴を助けてやると、鶴は山の方に飛んでいきました。家に帰ると、おじいさんはおばあさんに、「さっきわなにかかった鶴を助けてやった。今日はよいことをした。」
              そういうと、入口の戸をたたく音がしました。「だれでしょう。」とおばあさんは扉をあけたところ、美しい娘さんがそこに立っていました。
            </p>
            <p>
              「雪で道に迷ってしまいました。どうか一晩ここに泊めてもらえないでしょうか。」「今夜は特に冷える。さあ入んなさい。」娘さんはこの言葉に喜び、そこに泊まることにしました。
              その日から、娘はおじいさんの家でくらすようになりました。ある日、娘はこう言いました。「私に機（はた）をおらせてください。機をおっている間は、決して部屋をのぞかないでください。決して、決してのぞかないでください。」...
            </p>
            <h3>中略</h3>
            <p>
              「おじいさん、おばあさん、ご恩は決して忘れません。私はわなにかかっているところを助けられた鶴です。恩返しに来たのですが、姿をみられたので、もうここにはいられません。長い間ありがとうございました。」
            </p>
          </PostBody>
        </TowColumn.TowColumnMain>

        <TowColumn.TowColumnSidebar>
          <Contact />
        </TowColumn.TowColumnSidebar>
      </TowColumn>
    </Container>
  )
}

export default About
