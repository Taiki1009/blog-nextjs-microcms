import Image from "next/image"

const BlackSite = () => {
  return (
    <>
      {/* Portfolio */}
      <div className="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" id="portfolio">
        <section className="w-full">
          <h2 className="secondary-title">私のポートフォリオ</h2>
          <p className="section-paragraph">私が作ってきたWebアプリケーションはこちら</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Image src='/images/portfolio1.jpg' className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" width={400} height={300} objectFit='contain' alt="image" />
          <Image src='/images/portfolio2.jpg' className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" width={400} height={300} objectFit='contain' alt="image" />
          <Image src='/images/portfolio3.jpg' className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" width={400} height={300} objectFit='contain' alt="image" />
          <Image src='/images/portfolio4.jpg' className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" width={400} height={300} objectFit='contain' alt="image" />
          <Image src='/images/portfolio5.jpg' className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" width={400} height={300} objectFit='contain' alt="image" />
          <Image src='/images/portfolio6.jpg' className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" width={400} height={300} objectFit='contain' alt="image" />
          </div>
        </section>
      </div>

      {/* Skills */}
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

      {/* Contact */}
      <div className="container mt-52 mb-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" id="contact">
        <section className="w-full">
          <h2 className="secondary-title">お問合せ</h2>
          <p className="section-paragraph">私の経歴が気になる方はご一報ください。即時対応します。</p>

          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-16">
            <div className="space-y-12">
              <div>
                <label className="text-white block mb-6 text-xl font-bold">お名前</label>
                <input type="text" className="w-full border border-inputBorder bg-input p-4" />
              </div>
              <div>
                <label className="text-white block mb-6 text-xl font-bold">メールアドレス</label>
                <input type="text" className="w-full border border-inputBorder bg-input p-4" />
              </div>
              <div>
                <label className="text-white block mb-6 text-xl font-bold">メッセージ</label>
                <input type="text" className="w-full border border-inputBorder bg-input p-4" />
              </div>
              <button className="px-8 py-3 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 mt-10">
                <span>送信する</span>
              </button>
            </div>
            <div>
              <p className="text-secondary">000-1234-999</p>
              <a href="mailto:example@mail.com">example@mail.com</a>
              {/* sns */}
              <div className="mt-20 space-x-6">
                <a href="#">
                  <i className="fa-brands fa-twitter text-3xl text-blue-400"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook text-3xl text-blue-600"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram text-3xl text-pink-400"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlackSite
