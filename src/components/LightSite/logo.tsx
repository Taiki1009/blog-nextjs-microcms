import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/lightSite/" as="/lightSite/">
      <a className="border-b">CUBE</a>
    </Link>
  )
}

export default Logo
