import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
});

api.interceptors.request.use((config) => {
  if(process.env.NEXT_GITHUB_ACESS_TOKEN) {
    config.headers.Authorization = `token ${process.env.NEXT_GITHUB_ACESS_TOKEN};`
  }
  return config;
});

export const fetchGitHubRepos = async (username?: string) => {
  try {
    const endpoint = username 
      ? `/users/${username}/repos` 
      : '/user/repos';

    const response = await api.get(endpoint, {
      params: {
        sort: 'created', 
        direction: 'desc', 
        per_page: 3, 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
};