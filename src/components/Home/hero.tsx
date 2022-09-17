const Hero = () => {
  return (
    <>
    <div className="container mt-28 flex justify-between items-center px-8 md:px-14 lg:px-24 w-full" id="hero">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex flex-wrap justify-center mx-auto mt-0 max-w-xl md:mx-18 lg:ml-20 md:justify-start">
          <h1 className="font-bold text-5xl text-center md:text-left md:text-6xl lg:text-7xl">
            TailWindCSSで<br />
            いろんなサイトを<br />
            作ります
          </h1>
          <button className="px-6 py-4 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 mt-10">
            <i className="fa-solid fa-rocket mr-1"></i>
            <span>もっとみる</span>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
