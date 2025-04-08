'use client';

import { useI18n } from '../../i18n/i18n-provider';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';

export default function Articles() {
  const { t } = useI18n();

  const articles = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  return (
    <section className="py-16" id="articles">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('articlesTitle')}</h2>
        <p className="mb-10">{t('articlesDescription')}</p>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-mocha-black border border-purple-900 rounded-lg overflow-hidden"
              >
                <div className="aspect-video bg-gray-800">
                  <Image
                    src="/placeholder.svg?height=160&width=300"
                    alt={`${t('title')} ${article.id}`}
                    width={300}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{t('title')}</h3>
                  <p className="text-sm text-gray-400">
                    {t('briefDescription')}
                  </p>
                </div>
              </div>
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
