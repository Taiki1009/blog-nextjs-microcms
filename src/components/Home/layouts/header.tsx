import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full py-6 bg-zinc-700 sticky top-0 z-50 opacity-80">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
        <div className="text-3xl font-bold">
          <Link href="/dark-site">
            <a
              href=""
              className="hover:text-selected-text transition-all duration-300"
            >
              {"T's Blog"}
            </a>
          </Link>
        </div>
        <div className="space-x-12 hidden md:flex items-center">
          <Link href="blogs" as="/dark-site/blogs">
            <a
              href=""
              className="hover:text-selected-text transition-all duration-300"
            >
              Blogs
            </a>
          </Link>
          <Link href="#portfolio">
            <a
              href=""
              className="hover:text-selected-text transition-all duration-300"
            >
              ポートフォリオ
            </a>
          </Link>
          <Link href="#skills">
            <a
              href=""
              className="hover:text-selected-text transition-all duration-300"
            >
              スキル一覧
            </a>
          </Link>
          <Link href="#contact">
            <a
              href=""
              className="hover:text-selected-text transition-all duration-300"
            >
              お問合せ
            </a>
          </Link>
          <Link href="/" as="/">
            <a
              href=""
              className="hover:text-selected-text transition-all duration-300"
            >
              LightSite
            </a>
          </Link>
        </div>
        <div className="md:hidden">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  )
}

export default Header
