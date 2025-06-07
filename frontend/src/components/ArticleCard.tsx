import Link from 'next/link';
import { Article } from '../data/articles';

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <div className="bg-[#231942] rounded-2xl shadow-lg p-5 md:p-8 flex flex-col gap-3 md:gap-4 border border-[#39206d] transition hover:scale-[1.015]">
      <Link href={`/article/${article.id}`}>
        <h2 className="text-lg md:text-xl font-bold text-purple-200 hover:text-purple-400 transition mb-2 md:mb-3">{article.title}</h2>
      </Link>
      <p className="line-clamp-3 text-purple-100 text-sm md:text-base">{article.excerpt}</p>
      <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4 text-xs md:text-sm items-center">
        <span className="bg-[#32285b] px-2 py-1 md:px-3 rounded-full text-purple-300">{article.category}</span>
        {article.tags.map((tag, i) => (
          <span key={i} className="bg-[#473178] px-2 py-1 rounded-full text-purple-400">#{tag}</span>
        ))}
        <span className="ml-auto text-[#ac87e3]">{article.date}</span>
      </div>
    </div>
  );
}
