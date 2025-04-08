export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface TranslationKey {
  // Navigation
  home: string;
  services: string;
  skills: string;
  projects: string;
  articles: string;
  contact: string;
  categories: string;

  // Hero
  developer: string;
  heroDescription: string;

  // Stats
  yearExperience: string;
  projectsDeveloped: string;

  // Services
  serviceTitle: string;
  apiDevelopment: string;
  apiDescription: string;
  databaseManagement: string;
  databaseDescription: string;
  devOps: string;
  devOpsDescription: string;

  // Skills
  mySkills: string;
  skillsDescription: string;

  // Projects
  projectsTitle: string;
  projectsList: ProjectItem[];

  // Articles
  articlesTitle: string;
  title: string;
  briefDescription: string;

  // Contact
  contactMe: string;

  // Footer
  footerDescription: string;
  location: string;
  copyright: string;
}

export type AppLocales = 'en' | 'pt';

export type Translations = {
  [locale in AppLocales]: TranslationKey;
};

export type TranslationValue<K extends keyof TranslationKey> = TranslationKey[K];

export type TranslationReturnType<K extends keyof TranslationKey> =
  TranslationValue<K> extends Array<infer U> ? U[] :
  TranslationValue<K> extends string ? string :
  never;