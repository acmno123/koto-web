import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="py-10 bg-gradient-to-r from-sky-100 to-indigo-200 min-h-screen">
      <motion.h1
        className="text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        歡迎來到 KotoBot
      </motion.h1>

      <motion.p
        className="text-center text-lg text-slate-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        你的 Discord 好幫手，支援自動公告與各種指令功能！
      </motion.p>

      <motion.div
        className="text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="/invite"
          className="px-8 py-3 bg-sky-600 text-white rounded-lg shadow-lg hover:bg-sky-700 transition"
        >
          立即邀請
        </a>
      </motion.div>
    </section>
  )
}
