import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Invite from './pages/Invite'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow max-w-6xl mx-auto p-6 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/invite" element={<Invite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
