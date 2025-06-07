'use client'

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-[#221840] shadow-md mb-8 md:mb-16">
      <div className="max-w-2xl md:max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-10 py-4 md:py-6">
        {/* Logo */}
        <div className="flex items-center gap-3 md:gap-5">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center shadow-md">
            <span className="text-xl md:text-2xl font-bold text-white select-none">Я</span>
          </div>
          <span className="text-2xl md:text-3xl font-semibold text-purple-200 tracking-wider">bezmastilo</span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 md:gap-8 mt-4 md:mt-0">
          {/* Categories dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-base md:text-lg hover:text-[#c594fa] transition">
              Категории <span className="text-xs">▼</span>
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-[#231942] border border-[#39206d] rounded-lg shadow-lg w-40 py-2 z-10">
              <Link href="/category/news" className="block px-4 py-2 text-sm hover:bg-[#32285b]">Новини</Link>
              <Link href="/category/guides" className="block px-4 py-2 text-sm hover:bg-[#32285b]">Ръководства</Link>
            </div>
          </div>

          {/* Profile dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-base md:text-lg hover:text-[#c594fa] transition">
              Профил <span className="text-xs">▼</span>
            </button>
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-[#231942] border border-[#39206d] rounded-lg shadow-lg w-40 py-2 z-10 text-sm">
              <Link href="/profile" className="block px-4 py-2 hover:bg-[#32285b]">Профил</Link>
              <Link href="/login" className="block px-4 py-2 hover:bg-[#32285b]">Вход</Link>
              <Link href="/register" className="block px-4 py-2 hover:bg-[#32285b]">Регистрация</Link>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Търсене"
              className="bg-[#231942] border border-[#39206d] rounded-md text-sm px-3 py-1 focus:outline-none focus:border-[#a259fa] placeholder-purple-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
