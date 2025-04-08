import axios from 'axios';

const devToApi = axios.create({
  baseURL: 'https://dev.to/api',
  headers: {
    'Accept': 'application/vnd.forem.api-v1+json',
    'api-key': process.env.NEXT_ARTICLE_KEY
  }
});

export interface Article {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  readable_publish_date: string;
  url: string;
  user: {
    name: string;
  };
}

export async function fetchArticles(username: string): Promise<Article[]> {
  try {
    const response = await devToApi.get<Article[]>(`/articles?username=${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
}