import ArticleList from '../components/ArticleList';
import { articles } from '../data/articles';

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-10 md:space-y-16 w-full">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-300 text-center">
          Последни статии
        </h1>
      </div>
      <div>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}
