const Contact = () => {
  return(
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
  )
}

export default Contact
