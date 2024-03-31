"use client"

import { motion } from "framer-motion"

const AboutPage = () => {
  return (
    <motion.main className="limayyAboutPage" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3, ease: "easeIn" } }} >
      <h1>This is about page!</h1>
    </motion.main>
  )
}

export default AboutPage