import ArticleCard from './ArticleCard';
import { Article } from '../data/articles';

interface Props {
  articles: Article[];
}

export default function ArticleList({ articles }: Props) {
  return (
    <div className="flex flex-col gap-8 md:gap-12 w-full">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
