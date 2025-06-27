import Link from "next/link";
import Image from "next/image";

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
  return (
    <div className="group flex flex-col md:flex-row bg-[#241c3a] rounded-3xl shadow-xl overflow-hidden mb-10 hover:shadow-pink-900/20 transition relative">
      {/* Снимка */}
      <Link href={`/article/${slug}`} className="block w-full md:w-80 flex-none">
        <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#18142a] overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 767px) 100vw, 320px"
              priority
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center text-lg text-gray-400 opacity-40">
              {title}
            </span>
          )}
        </div>
      </Link>

      {/* Дясна част */}
      <div className="flex flex-col flex-1 p-5 md:p-8 relative min-h-[240px] left-5 right-5 bottom-5 top-3">
        <div>
          <div className="text-sm font-bold text-[#a59dce] mb-2 mt-2">{date}</div>
          <Link href={`/article/${slug}`}>
            <h2 className="!text-2xl !font-extrabold mb-5 leading-tight transition group-hover:text-pink-400">
              {title}
            </h2>
          </Link>
          <p className="text-base md:text-lg opacity-80 mb-8">{description}</p>
        </div>
        {/* Категории и тагове – нов стил, без бяло */}
        <div className="flex flex-wrap gap-3 absolute left-5 right-5 bottom-6">
          {/* Категория */}
          <Link
            href={`/category/${category.slug}`}
            className="inline-block text-xs font-bold !px-4 !py-2 rounded-lg bg-[#7a41c6] text-white shadow-md
              hover:bg-[#a259fa] hover:shadow-xl hover:scale-105 focus:outline-none transition-all duration-200"
          >
            {category.name}
          </Link>
          {/* Тагове */}
          {tags.map((tag) => (
            <Link
              href={`/tag/${tag.slug}`}
              key={tag.id}
              className="inline-block text-xs font-semibold !px-4 !py-2 rounded-md border border-[#a259fa] text-[#a259fa] bg-[#1e1530]
                hover:bg-[#473178] hover:text-white hover:shadow-md focus:outline-none transition-all duration-200"
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
