import ArticleList from '../components/ArticleList';
import { articles } from '../data/articles';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-purple-300">Последни статии</h1>
      <ArticleList articles={articles} />
    </div>
  );
}
