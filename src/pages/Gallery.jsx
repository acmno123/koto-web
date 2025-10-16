import React from 'react'

export default function Gallery() {
  return (
    <section className="py-10 px-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-4 bg-white rounded-xl shadow-lg">圖片/內容 1</div>
        <div className="p-4 bg-white rounded-xl shadow-lg">圖片/內容 2</div>
        <div className="p-4 bg-white rounded-xl shadow-lg">圖片/內容 3</div>
      </div>
    </section>
  )
}
