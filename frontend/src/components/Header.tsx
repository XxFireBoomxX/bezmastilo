import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#201638] shadow-md mb-8 md:mb-16">
      <div className="max-w-2xl md:max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-10 py-4 md:py-7">
        <div className="flex items-center gap-3 md:gap-5">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center shadow-md">
            <span className="text-xl md:text-2xl font-bold text-white select-none">Я</span>
          </div>
          <span className="text-2xl md:text-3xl font-semibold text-purple-200 tracking-wider">bezmastilo</span>
        </div>
        <nav className="flex gap-6 md:gap-12 mt-4 md:mt-0">
          <Link href="/" className="text-base md:text-lg hover:text-purple-400 transition">Начало</Link>
          <Link href="/categories" className="text-base md:text-lg hover:text-purple-400 transition">Категории</Link>
          <Link href="/login" className="text-base md:text-lg hover:text-purple-400 transition">Вход</Link>
        </nav>
      </div>
    </header>
  );
}
