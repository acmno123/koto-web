import React from 'react'

export default function Pricing() {
  return (
    <section className="py-10 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">訂閱與價格方案</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold">免費方案</h3>
          <p className="mt-2 text-slate-500">基礎功能，適合小型伺服器。</p>
          <p className="mt-4 font-bold">$0 / 月</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold">進階方案</h3>
          <p className="mt-2 text-slate-500">進階功能，包含自動公告與指令管理。</p>
          <p className="mt-4 font-bold">$5 / 月</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold">專業方案</h3>
          <p className="mt-2 text-slate-500">完整功能 + 高級特效與自訂設定。</p>
          <p className="mt-4 font-bold">$10 / 月</p>
        </div>
      </div>
    </section>
  )
}
