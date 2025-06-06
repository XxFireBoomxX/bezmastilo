import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-5 bg-[#221840] shadow-lg mb-8 flex items-center justify-between rounded-b-2xl px-6">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center shadow-md">
          <span className="text-xl font-bold text-white select-none">Я</span>
        </div>
        <span className="text-2xl font-semibold text-purple-200 tracking-wider">bezmastilo</span>
      </div>
      <nav className="flex gap-4">
        <Link href="/" className="hover:text-purple-400 transition">Начало</Link>
        <Link href="/categories" className="hover:text-purple-400 transition">Категории</Link>
        <Link href="/login" className="hover:text-purple-400 transition">Вход</Link>
      </nav>
    </header>
  );
}
