import Image from 'next/image'
import humanImg from '../../public/human.jpg'

const Practice = () => {
  return (
    <div className="container mt-16 mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full" id="practice">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex flex-wrap justify-center mx-auto mt-0 max-w-xl md:my-36 lg:ml-20 md:justify-start">
          <h1 className="font-bold text-5xl text-center md:text-left md:text-6xl lg:text-7xl">
            TailWindCSSで<br />
            かっこいいサイトを<br />
            作ります
          </h1>
          <button className="px-6 py-4 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 mt-10">
            <i className="fa-solid fa-rocket mr-1"></i>
            <span>もっとみる</span>
          </button>
        </div>
        {/* [FIXME] 透過させたimageを使用する。 */}
        <div className="block md:absolute w-10/12 mt-12 right-6 md:w-3/5 md:mt-0 lg:w-3/6 lg:top-2 lg:right-52">
          <Image src={humanImg} className="w-10/12 md:w-3/5 lg:w-3/6 md:absolute mt-12 right-6 md:mt-0 lg:top-2 lg:right-52 -z-10" layout="intrinsic" alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Practice
