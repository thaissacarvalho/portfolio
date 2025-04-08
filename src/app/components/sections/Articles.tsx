'use client';

import { useI18n } from '../../i18n/i18n-provider';
import { FiChevronRight } from 'react-icons/fi';
import { ArticleCard } from '@/app/ui/ArticleCard';
import { useArticles } from '@/app/hooks/useArticles';
import TitleSection from '@/app/ui/TitleSection';

export default function Articles() {
  const { t } = useI18n();
  const { articles, loading, error } = useArticles('thaissacarvalho');

  if (loading)
    return (
      <div className="container mx-auto px-4 py-16">Loading articles...</div>
    );
  if (error)
    return <div className="container mx-auto px-4 py-16">Error: {error}</div>;

  return (
    <section className="p-8 pb-3" id="articles">
      <div className="flex flex-col gap-8 p-4">
        <TitleSection content={t('articlesTitle')} />

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.slice(0, 4).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <button className="absolute-right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 rounded-full p-2 shadow-lg">
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
