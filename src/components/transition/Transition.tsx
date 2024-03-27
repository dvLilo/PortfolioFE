"use client"

import { usePathname } from "next/navigation"

import { AnimatePresence, motion } from "framer-motion"

import Navbar from "@components/nav/Navbar"
import Footer from "@components/footer/Footer"

const Transition = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
        <motion.div
          className="limayyIntroTransition"
          animate={{
            transform: "scale(0)"
          }}
          exit={{
            transform: "scale(86)"
          }}
          transition={{
            duration: 0.4,
            ease: "easeIn"
          }}
        />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </div>
    </AnimatePresence>
  )
}

export default Transition