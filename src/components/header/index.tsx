import Link from "next/link"

const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
        <div className="text-3xl font-bold">
          <Link href="/">
            <a href="" className="hover:text-selected-text transition-all duration-300">Taiki Blog</a>
          </Link>
        </div>
        <div className="space-x-12 hidden md:flex items-center">
          <Link href="portfolio">
            <a href="" className="hover:text-selected-text transition-all duration-300">ポートフォリオ</a>
          </Link>
          <Link href="practice">
            <a href="" className="hover:text-selected-text transition-all duration-300">プラクティス</a>
          </Link>
          <Link href="skills">
            <a href="" className="hover:text-selected-text transition-all duration-300">スキル一覧</a>
          </Link>
          <a href="#contact">
            <button className="px-6 py-2 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">お問合せ</button>
          </a>
        </div>
        <div className="md:hidden">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  )
}

export default Header
