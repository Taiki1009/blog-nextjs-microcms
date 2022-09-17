import Link from "next/link"

const Nav = () => {
  return (
    <nav>
      <ul className="py-2 px-4">
        <li className="list-disc">
          <Link href="/lightSite">
            <a className="border-b">Home</a>
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/lightSite/about">
            <a className="border-b">About</a>
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/lightSite/blog">
            <a className="border-b">Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
