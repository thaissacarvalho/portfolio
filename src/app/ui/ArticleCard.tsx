import { Article } from '../api/devto';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-mocha-black border border-purple-900 rounded-lg overflow-hidden hover:border-purple-600 transition-colors block"
    >
      <div className="p-4">
        <h3 className="font-medium">{article.title}</h3>
        <p className="text-sm text-gray-400 line-clamp-2">
          {article.description}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          {article.readable_publish_date} • {article.user.name}
        </p>
      </div>
    </a>
  );
}