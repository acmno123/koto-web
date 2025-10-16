import React from 'react'
export default function Home(){
  const invite = 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands'
  return (
    <section className='grid md:grid-cols-2 gap-8 items-center py-10'>
      <div>
        <h1 className='text-4xl font-extrabold'>Koto — 你的 Discord 小幫手</h1>
        <p className='mt-4 text-slate-600'>整合 Slash 指令、等級系統、AI 聊天、梗圖、天氣、音樂等功能，幫你的社群更有溫度。</p>
        <div className='mt-6 flex items-center gap-3'>
          <a href={invite} target='_blank' rel='noreferrer' className='px-5 py-3 bg-sky-600 text-white rounded-lg shadow'>立即邀請</a>
          <a href='/invite' className='px-4 py-3 border rounded-lg'>邀請說明</a>
        </div>
      </div>
      <div className='bg-white rounded-2xl shadow-lg p-6'>
        <div className='flex items-center gap-4'>
          <div className='w-16 h-16 rounded-lg bg-sky-50 flex items-center justify-center font-bold'>K</div>
          <div>
            <h3 className='font-bold'>Koto • v3</h3>
            <p className='text-sm text-slate-500'>已支援 Slash Commands、AI 與音樂播放</p>
          </div>
        </div>
      </div>
    </section>
  )
}
