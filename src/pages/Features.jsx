import { motion } from 'framer-motion'

export default function FeatureCard({ title, description }) {
  return (
    <motion.div className="p-6 bg-white rounded-xl shadow-lg cursor-pointer"
      initial={{ opacity:0, y:50 }}
      whileInView={{ opacity:1, y:0 }}
      whileHover={{ scale:1.05, rotate:1, boxShadow:'0 20px 30px rgba(0,0,0,0.2)' }}
      viewport={{ once:true }}
      transition={{ duration:0.6 }}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-500">{description}</p>
    </motion.div>
  )
}
