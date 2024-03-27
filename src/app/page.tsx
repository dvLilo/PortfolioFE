"use client"

import { motion } from "framer-motion"

import "@app/homepage.styles.scss"

const HomePage = () => {
  return (
    <motion.main className="limayyHomePage" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.3, ease: "easeIn" } }} >
      <div className="limayyHomePage__intro">
        <h4>Some eye catching animation here</h4>
      </div>
    </motion.main>
  )
}

export default HomePage