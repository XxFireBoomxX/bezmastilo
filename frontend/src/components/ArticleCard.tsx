import Link from 'next/link';
import { Article } from '../data/articles';

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <div className="bg-[#231942] rounded-2xl shadow-lg p-6 flex flex-col gap-3 border border-[#39206d] hover:scale-[1.025] transition">
      <Link href={`/article/${article.id}`}>
        <h2 className="text-xl font-bold text-purple-200 hover:text-purple-400 transition">{article.title}</h2>
      </Link>
      <p className="line-clamp-3 text-purple-100 text-sm">{article.excerpt}</p>
      <div className="flex flex-wrap gap-3 mt-2 text-xs">
        <span className="bg-[#32285b] px-3 py-1 rounded-full text-purple-300">{article.category}</span>
        {article.tags.map((tag, i) => (
          <span key={i} className="bg-[#473178] px-2 py-1 rounded-full text-purple-400">#{tag}</span>
        ))}
        <span className="ml-auto text-[#ac87e3]">{article.date}</span>
      </div>
    </div>
  );
}
