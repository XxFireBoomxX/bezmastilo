import { Article } from '../data/articles';

interface Props {
  article: Article;
}

export default function ArticleView({ article }: Props) {
  return (
    <article className="bg-[#241c3a] rounded-2xl shadow-xl p-10 border border-[#39206d] mt-12 w-full">
      <h1 className="text-3xl font-bold text-purple-200 mb-6 text-center">{article.title}</h1>
      <div className="flex gap-4 text-sm text-purple-300 mb-8 justify-center">
        <span>{article.date}</span>
        <span className="bg-[#32285b] px-3 py-1 rounded-full">{article.category}</span>
        {article.tags.map((tag, i) => (
          <span key={i} className="bg-[#473178] px-2 py-1 rounded-full">#{tag}</span>
        ))}
      </div>
      <div className="prose prose-invert max-w-none text-purple-50">{/* html съдържание */}</div>
    </article>
  );
}
