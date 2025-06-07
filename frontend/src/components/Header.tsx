'use client'

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-[#221840] shadow-lg sticky top-0 z-50 text-[#ece0ff] mb-8 md:mb-16">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 md:px-10 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#a259fa] to-[#39206d] flex items-center justify-center shadow-md">
            <span className="text-xl md:text-2xl font-bold select-none">Я</span>
          </div>
          <span className="text-2xl md:text-3xl font-semibold tracking-wide">bezmastilo</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-8">
          {/* Categories dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#c594fa] transition-colors">
              Категории <span className="text-xs">▼</span>
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-[#231942] border border-[#39206d] rounded-md shadow-lg w-40 py-2 z-10">
              <Link href="/category/news" className="block px-4 py-2 text-sm hover:bg-[#32285b]">Новини</Link>
              <Link href="/category/guides" className="block px-4 py-2 text-sm hover:bg-[#32285b]">Ръководства</Link>
            </div>
          </div>

          {/* Profile dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#c594fa] transition-colors">
              Профил <span className="text-xs">▼</span>
            </button>
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-[#231942] border border-[#39206d] rounded-md shadow-lg w-40 py-2 z-10 text-sm">
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
              className="bg-[#231942] border border-[#39206d] rounded-md text-sm px-3 py-1 placeholder-[#ac87e3] focus:outline-none focus:ring-2 focus:ring-[#a259fa]"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
