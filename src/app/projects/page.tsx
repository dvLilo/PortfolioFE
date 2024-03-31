"use client"

import { motion } from "framer-motion"

const ProjectPage = () => {
  return (
    <motion.main className="limayyProjectPage" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3, ease: "easeIn" } }} >
      <h1>This is projects page!</h1>
    </motion.main>
  )
}

export default ProjectPage