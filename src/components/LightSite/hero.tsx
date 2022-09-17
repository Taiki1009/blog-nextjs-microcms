type Props = {
  title: string
  subtitle: string
  imageOn?: boolean
}

const Hero = ({ title, subtitle, imageOn = false }: Props) => {
  return (
    <div className={'my-10'}>
      <h1 className={'text-4xl font-bold mb-5'}>{title}</h1>
      <p>{subtitle}</p>
      {imageOn && <figure>[画像]</figure>}
    </div>
  )
}

export default Hero
