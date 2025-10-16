import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Features from './pages/Features'
import Invite from './pages/Invite'
import About from './pages/About'

export default function App(){
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-grow max-w-6xl mx-auto p-6 w-full'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/features' element={<Features/>} />
            <Route path='/invite' element={<Invite/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
