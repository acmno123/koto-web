import { motion } from 'framer-motion'
// import Particles from 'react-tsparticles' // 可選

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start items-center text-center bg-gradient-to-r from-indigo-500 to-sky-400 overflow-hidden">
      {/* 粒子背景 */}
      {/* <Particles className="absolute inset-0" options={{ particles: { number: { value: 50 }, size: { value: 3 }, links: { enable: true, color: '#fff' }, move: { enable: true, speed: 1 } } }} /> */}

      {/* 將內容下移，例如加 mt-40 */}
      <motion.div className="relative mt-40"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-5xl font-bold mb-4">KotoBot</h1>
        <p className="text-white text-lg mb-6">
          最強 Discord 助手，支援公告、自動指令與更多！
        </p>
        <motion.a
          href="/invite"
          className="px-8 py-3 bg-yellow-400 text-black rounded-lg font-bold shadow-lg hover:bg-yellow-500 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          立即邀請
        </motion.a>
      </motion.div>
    </section>
  )
}
