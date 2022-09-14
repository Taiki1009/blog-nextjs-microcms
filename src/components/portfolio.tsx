import Image from 'next/image'

const Portfolio = () => {
  return (
  <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" id="portfolio">
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
  )
}

export default Portfolio
