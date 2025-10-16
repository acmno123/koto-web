import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(){
  const invite = 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands'
  return (
    <header className='bg-white/70 backdrop-blur sticky top-0 z-40'>
      <div className='max-w-6xl mx-auto p-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center font-bold'>K</div>
          <div>
            <div className='text-lg font-bold'>Koto</div>
            <div className='text-xs text-slate-500'>可愛又聰明的伺服器小幫手</div>
          </div>
        </div>
        <nav className='flex items-center gap-4'>
          <Link to='/' className='text-sm hover:underline'>Home</Link>
          <Link to='/features' className='text-sm hover:underline'>Features</Link>
          <Link to='/invite' className='text-sm hover:underline'>Invite</Link>
          <Link to='/about' className='text-sm hover:underline'>About</Link>
          <a href={invite} target='_blank' rel='noreferrer' className='ml-3 px-4 py-2 bg-sky-600 text-white rounded-lg'>Invite Koto</a>
        </nav>
      </div>
    </header>
  )
}
