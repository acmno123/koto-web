import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 to-sky-400 overflow-hidden">
      <Particles className="absolute inset-0" options={{ particles: { number: { value: 50 }, size: { value: 3 }, links: { enable: true, color: '#fff' }, move: { enable: true, speed: 1 } } }} />
      <motion.h1 className="relative text-white text-5xl font-bold mb-4" initial={{ y:-50, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:1 }}>KotoBot</motion.h1>
      <motion.p className="relative text-white text-lg mb-6" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5, duration:1 }}>
        最強 Discord 助手，支援公告、自動指令與更多！
      </motion.p>
      <motion.a href="/invite" className="relative px-8 py-3 bg-yellow-400 text-black rounded-lg font-bold shadow-lg hover:bg-yellow-500 transition" whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}>
        立即邀請
      </motion.a>
    </section>
  )
}
