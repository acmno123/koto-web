import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">KotoBot</h1>
        <ul className="flex gap-6">
          {['Home','Features','Pricing','Gallery','About','Invite'].map((page)=>(
            <motion.li key={page} whileHover={{ scale:1.1 }} transition={{ duration:0.2 }}>
              <Link to={`/${page.toLowerCase()}`}>{page}</Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

