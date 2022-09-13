
const Skills = () => {
  return(
    <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" id="skills">
      <section className="w-full">
        <h2 className="secondary-title">スキルスタック</h2>
        <p className="section-paragraph">私は以下のプログラミング言語を扱ってきました</p>

        <div className="my-16">
          <div className="w-full border border-purple-300 p-16 lg:px-32 lg;py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
            {/* 言語のロゴ */}
            <div className="mb-6 lg:mb-0 self-center">
              <i className="fa-brands fa-js-square text-9xl text-yellow-300"></i>
            </div>

            {/* スキルの説明 */}
            <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
              <h1 className="text-3xl font-semibold">Javascript</h1>
              <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                <div className="badge">ウェブサイト制作</div>
                <div className="badge">フロントエンド開発</div>
              </div>
              <p className="text-secondary">Javascriptエンジニア。Reactの学習中です。</p>
            </div>
          </div>
        </div>

        <div className="my-16">
          <div className="w-full border border-purple-300 p-16 lg:px-32 lg;py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-blue-300 transition-all duration-300 cursor-pointer">
            {/* 言語のロゴ */}
            <div className="mb-6 lg:mb-0 self-center">
              <i className="fa-brands fa-python text-9xl text-blue-300"></i>
            </div>

            {/* スキルの説明 */}
            <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
              <h1 className="text-3xl font-semibold">Python</h1>
              <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                <div className="badge">AI/DX</div>
                <div className="badge">データサイエンス</div>
              </div>
              <p className="text-secondary">AI開発をメインに受注。企業のデータ分析も手がけています。</p>
            </div>
          </div>
        </div>

        <div className="my-16">
          <div className="w-full border border-purple-300 p-16 lg:px-32 lg;py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-orange-300 transition-all duration-300 cursor-pointer">
            {/* 言語のロゴ */}
            <div className="mb-6 lg:mb-0 self-center">
              <i className="fa-brands fa-html5 text-9xl text-orange-300"></i>
            </div>

            {/* スキルの説明 */}
            <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
              <h1 className="text-3xl font-semibold">HTML/CSS</h1>
              <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                <div className="badge">フロントエンド開発</div>
                <div className="badge">ホームページ制作</div>
              </div>
              <p className="text-secondary">100社以上のホームページを手掛けてきました。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
