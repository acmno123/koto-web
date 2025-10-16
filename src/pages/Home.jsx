import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const particlesOptions = {
    fpsLimit: 60,
    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 4 } },
      links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1, direction: "none", outModes: "bounce" }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-start items-center text-center bg-gradient-to-r from-indigo-500 to-sky-400 overflow-hidden">
      {/* 粒子背景 */}
      <Particles className="absolute inset-0" init={particlesInit} options={particlesOptions} />

      {/* 主要內容 */}
      <motion.div
        className="relative mt-40 px-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-white text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          KotoBot
        </motion.h1>

        <motion.p
          className="text-white text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          最強 Discord 助手，支援公告、自動指令與更多！
        </motion.p>

        <motion.a
          href="/invite"
          className="px-8 py-3 bg-yellow-400 text-black rounded-lg font-bold shadow-lg hover:bg-yellow-500 transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
        >
          立即邀請
        </motion.a>
      </motion.div>
    </section>
  )
}
