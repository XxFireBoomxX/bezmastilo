import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

interface Tag { id: number; name: string; slug: string; }
interface Category { id: number; name: string; slug: string; }
interface ArticleCardProps {
  imageUrl?: string;
  title: string;
  description: string;
  date: string;
  category: Category;
  tags: Tag[];
  slug: string;
}

export default function ArticleCard({
  imageUrl,
  title,
  description,
  date,
  category,
  tags,
  slug,
}: ArticleCardProps) {
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  function handleImageError() {
    if (imageWrapperRef.current) {
      imageWrapperRef.current.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="#a59dce" class="w-16 h-16 mx-auto opacity-60">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
      `;
    }
  }

  return (
    <div
      className="group flex flex-col md:flex-row bg-[#241c3a] rounded-3xl shadow-xl overflow-hidden mb-10
        hover:shadow-pink-900/20 transition-transform duration-200 ease-[cubic-bezier(.4,1.2,.7,1)]
        hover:scale-105 relative w-full min-w-0 min-h-[240px] md:h-[260px]"
    >
      {/* Снимка */}
      <Link href={`/article/${slug}`} className="block w-full md:w-80 flex-none">
        <div
          ref={imageWrapperRef}
          className="relative w-full aspect-square md:aspect-[4/3] bg-[#18142a] overflow-hidden h-full flex items-center justify-center"
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 767px) 100vw, 320px"
              priority
              onError={handleImageError}
            />
          ) : (
            // SVG placeholder ако няма снимка
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="#a59dce" className="w-16 h-16 mx-auto opacity-60">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
          )}
        </div>
      </Link>

      {/* Дясна част */}
      <div className="flex flex-col flex-1 min-w-0 p-3 md:p-5 relative h-full justify-between">
        {/* Текстове */}
        <div className="min-w-0 w-full overflow-hidden">
          <div className="text-sm font-bold text-[#a59dce] mb-1 mt-1">{date}</div>
          <Link href={`/article/${slug}`}>
            <h2 className="truncate w-full max-w-full text-2xl font-extrabold mb-3 leading-tight transition group-hover:text-pink-400">
              {title}
            </h2>
          </Link>
          <p className="text-base md:text-lg opacity-80 mb-4 line-clamp-2">{description}</p>
        </div>
        {/* Категории и тагове – винаги долу, с fade */}
        <div className="relative w-full">
          <div className="flex flex-nowrap gap-2 overflow-hidden">
            {/* Категория */}
            <Link
              href={`/category/${category.slug}`}
              className="inline-block text-xs font-bold px-3 py-1.5 rounded-lg bg-[#7a41c6] text-white shadow-md
                hover:bg-[#a259fa] hover:shadow-xl hover:scale-105 focus:outline-none transition-all duration-200 whitespace-nowrap"
            >
              {category.name}
            </Link>
            {/* Тагове */}
            {tags.map((tag) => (
              <Link
                href={`/tag/${tag.slug}`}
                key={tag.id}
                className="inline-block text-xs font-semibold px-3 py-1.5 rounded-md border border-[#a259fa] text-[#a259fa] bg-[#1e1530]
                  hover:bg-[#473178] hover:text-white hover:shadow-md focus:outline-none transition-all duration-200 whitespace-nowrap"
              >
                #{tag.name}
              </Link>
            ))}
          </div>
          {/* FADE ефектът! */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-12"
            style={{
              background: "linear-gradient(to right, transparent, #241c3a 80%)"
            }}
          />
        </div>
      </div>
    </div>
  );
}
