import React from 'react'
import Particles from 'react-tsparticles'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="relative py-10 min-h-screen">
      <Particles
        className="absolute inset-0"
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: { enable: true, distance: 150, color: '#38bdf8' },
          },
        }}
      />
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">歡迎來到 KotoBot</h1>
        <p className="text-lg mb-6 text-slate-700">你的 Discord 好幫手！</p>
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
