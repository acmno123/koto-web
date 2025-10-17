import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <nav className="flex gap-6 p-4 bg-gray-800 rounded-lg shadow-lg">
        <Link to="/" className="hover:text-blue-400">🏠 首頁</Link>
        <Link to="/about" className="hover:text-blue-400">ℹ️ 關於</Link>
      </nav>

      <main className="flex-1 flex items-center justify-center p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="p-4 text-gray-400 text-sm">
        © 2025 KotoBot Website
      </footer>
    </div>
  );
}
