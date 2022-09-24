import Image from 'next/image'
import heroImg from 'images/human.jpg'

const Hero = () => {
  return (
    <>
      <div
        className="container mt-28 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
        id="hero"
      >
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap mt-0 z-[1]">
            <h1 className="font-bold text-5xl text-center md:text-left md:text-6xl lg:text-7xl">
              TailWindCSSで
              <br />
              いろんなサイトを
              <br />
              作ります
            </h1>
            <button className="w-40 h-16 px-6 py-4 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 mt-10">
              <i className="fa-solid fa-rocket mr-1"></i>
              <span>もっとみる</span>
            </button>
          </div>
          <div className="md:absolute lg:top-2 lg:right-64 w-10/12 md:w-3/5 mt-12 md:mt-0 mx-auto lg:w-3/6">
            <Image
              src={heroImg.src}
              alt="image"
              layout="intrinsic"
              width={800}
              height={1000}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
