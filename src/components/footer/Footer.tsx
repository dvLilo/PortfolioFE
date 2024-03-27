"use client"

import Link from "next/link"

import "@components/footer/footer.styles.scss"

const Footer = () => {
  return (
    <div className="limayyFooter">
      <span className="limayyFooter__copy">
        &copy; {new Date().getFullYear()} Limayy Ducut
      </span>

      <ul className="limayyFooter__links">
        <li>
          <Link href="#">about</Link>
        </li>
        <li>
          <Link href="#">projects</Link>
        </li>
        <li>
          <Link href="#">contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer