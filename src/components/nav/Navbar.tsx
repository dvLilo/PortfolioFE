import Link from "next/link"
import Image from "next/image"

import { Facebook, GitHub, Instagram, Linkedin } from "react-feather"

import styles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.limayyNavbar}>
      <Link href="/">
        <Image className={styles.limayyNavbarLogo} src="/logo.png" alt="" width={54} height={54} />
      </Link>

      <div className={styles.limayyNavbarRoutes}>
        <ul className={styles.limayyNavbarLinks}>
          <li>
            <Link href="/about">about</Link>
          </li>

          <li>
            <Link href="/projects">portfolio</Link>
          </li>

          <li>
            <Link href="/contacts">contact</Link>
          </li>
        </ul>

        <ul className={styles.limayyNavbarSocials}>
          <li>
            <Link href="#"><Facebook /></Link>
          </li>

          <li>
            <Link href="#"><Instagram /></Link>
          </li>

          <li>
            <Link href="#"><GitHub /></Link>
          </li>

          <li>
            <Link href="#"><Linkedin /></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar