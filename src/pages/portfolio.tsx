import Image from 'next/image'
import portfolio1Img from '../../public/portfolio1.jpg'
import portfolio3Img from '../../public/portfolio3.jpg'
import portfolio2Img from '../../public/portfolio2.jpg'
import portfolio4Img from '../../public/portfolio4.jpg'
import portfolio5Img from '../../public/portfolio5.jpg'
import portfolio6Img from '../../public/portfolio6.jpg'

const Portfolio = () => {
  return (
  <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <section className="w-full">
      <h2 className="secondary-title">私のポートフォリオ</h2>
      <p className="section-paragraph">私が作ってきたWebアプリケーションはこちら</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Image src={portfolio1Img} className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" objectFit='contain' alt="image" />
      <Image src={portfolio2Img} className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" objectFit='contain' alt="image" />
      <Image src={portfolio3Img} className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" objectFit='contain' alt="image" />
      <Image src={portfolio4Img} className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" objectFit='contain' alt="image" />
      <Image src={portfolio5Img} className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" objectFit='contain' alt="image" />
      <Image src={portfolio6Img} className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" objectFit='contain' alt="image" />
      </div>
    </section>
  </div>
  )
}

export default Portfolio
