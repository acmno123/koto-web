import React from 'react'
export default function About(){
  return (
    <section className='py-10'>
      <h2 className='text-2xl font-bold'>關於 Koto</h2>
      <p className='mt-4 text-slate-600'>Koto 是一隻以互動與趣味為主的 Discord 機器人，目標是提高社群黏著度並提供實用工具。</p>
      <div className='mt-6'>
        <h4 className='font-semibold'>版本</h4>
        <p className='text-sm text-slate-500'>v3 - Slash Commands 版本</p>
      </div>
    </section>
  )
}
