import React from 'react'
export default function Invite(){
  const invite = 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands'
  const support = 'https://discord.gg/your-server'
  return (
    <section className='py-10'>
      <h2 className='text-2xl font-bold'>邀請 Koto 到你的伺服器</h2>
      <p className='mt-2 text-slate-600'>點選下方按鈕，選擇一個你管理的伺服器即可邀請。</p>
      <div className='mt-6 flex gap-3'>
        <a href={invite} target='_blank' rel='noreferrer' className='px-4 py-3 bg-sky-600 text-white rounded-lg'>邀請 Koto</a>
        <a href={support} target='_blank' rel='noreferrer' className='px-4 py-3 border rounded-lg'>加入支援伺服器</a>
      </div>
      <div className='mt-6 text-sm text-slate-500'>提示：記得在 Developer Portal 開啟必要權限與 intents（如需）。</div>
    </section>
  )
}
