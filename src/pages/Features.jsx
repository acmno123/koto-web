import React from 'react'
const items = [
  {title:'Slash 指令', desc:'直覺式指令探索與使用'},
  {title:'等級系統', desc:'聊天獲得 XP，提升用戶參與'},
  {title:'AI 聊天', desc:'/chat 連接 ChatGPT'},
  {title:'梗圖與笑話', desc:'/meme / /joke 隨機娛樂'},
  {title:'天氣查詢', desc:'/weather <城市>'},
  {title:'音樂播放', desc:'/play 到語音頻道'}
]
export default function Features(){
  return (
    <section className='py-10'>
      <h2 className='text-2xl font-bold'>功能總覽</h2>
      <div className='mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {items.map(i=>(
          <div key={i.title} className='p-6 bg-white rounded-lg shadow'>
            <h4 className='font-semibold'>{i.title}</h4>
            <p className='text-sm text-slate-500 mt-2'>{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
