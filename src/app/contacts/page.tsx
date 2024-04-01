"use client"


import { motion } from "framer-motion"

import "@app/contacts/contact.styles.scss"

const ContactPage = () => {

  return (
    <motion.main className="limayyContactPage" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3, ease: "easeIn" } }}>
      <div className="limayyContactPage__intro">
        <div className="limayyContactPage__wrapper">
          <div>
            <h1>contacts.</h1>
          </div>
          <div>
            <h1>contacts.</h1>
          </div>
        </div>
      </div>
    </motion.main>
  )
}

export default ContactPage