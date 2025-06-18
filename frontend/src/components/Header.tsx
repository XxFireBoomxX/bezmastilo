import Link from "next/link";
import SearchBar from "./SearchBar";
import CategoryMenu from "./CategoryMenu";

export default function Header({
  categories,
}: {
  categories: { id: number; name: string; slug: string }[];
}) {
  return (
    <header className="py-6 shadow-lg shadow-[#2b2340]/40 backdrop-blur-sm bg-[#18142a]/80 z-50 sticky top-0">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Лого и заглавие */}
        <Link href="/" className="group flex items-center gap-x-2 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 -rotate-90 text-pink-700 transition duration-300 group-hover:text-pink-400"
          >
            <path
              fillRule="evenodd"
              d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-white transition duration-300 group-hover:text-pink-400">
            Без Мастило
          </span>
        </Link>

        {/* Навигация */}
        <nav>
          <ul className="flex items-center gap-x-6 md:gap-x-10 text-sm md:text-base text-white">
            <li>
              <Link
                href="/"
                className="relative transition duration-200 hover:text-pink-400 before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:bg-pink-400 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left"
              >
                Начало
              </Link>
            </li>
            <li>
              <CategoryMenu categories={categories} />
            </li>
            <li>
              <Link
                href="/contact"
                className="relative transition duration-200 hover:text-pink-400 before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:bg-pink-400 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left"
              >
                Контакт
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="relative transition duration-200 hover:text-pink-400 before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:bg-pink-400 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left"
              >
                За нас
              </Link>
            </li>
            <li>
              <SearchBar />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
