import { useState, useEffect } from 'react';
import { fetchArticles, Article } from '../api/devto';

export function useArticles(username: string) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await fetchArticles(username);
        setArticles(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, [username]);

  return { articles, loading, error };
}