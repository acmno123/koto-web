import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Invite from './pages/Invite'

export default function App() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {[Home, Features, Pricing, Gallery, About, Invite].map((Page, idx)=>
          <Route key={idx} path={`/${Page.name.toLowerCase()}`} element={
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}>
              <Page />
            </motion.div>
          } />
        )}
      </Routes>
    </AnimatePresence>
  )
}
