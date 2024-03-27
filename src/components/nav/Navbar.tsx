"use client"

import Link from "next/link"
import Image from "next/image"

import { Facebook, GitHub, Instagram, Linkedin } from "react-feather"

import "@components/nav/navbar.styles.scss"

const Navbar = () => {
  return (
    <nav className="limayyNavbar">
      <Link href="/">
        <Image className="limayyNavbar__logo" src="/logo.png" alt="" width={54} height={54} />
      </Link>

      <div className="limayyNavbar__routes">
        <ul className="limayyNavbar__links">
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

        <ul className="limayyNavbar__socials">
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
            <Link href="https://linkedin.com/in/dvlilo/"><Linkedin /></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar