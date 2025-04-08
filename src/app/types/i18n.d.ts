export interface TranslationKey {
  // Navigation
  home: string
  services: string
  skills: string
  projects: string
  articles: string
  contact: string
  categories: string

  // Hero
  developer: string
  heroDescription: string

  // Stats
  yearExperience: string
  projectsDeveloped: string

  // Services
  serviceTitle: string
  apiDevelopment: string
  apiDescription: string
  databaseManagement: string
  databaseDescription: string
  devOps: string
  devOpsDescription: string

  // Skills
  mySkills: string
  skillsDescription: string

  // Projects
  projectsTitle: string
  projectName: string
  technologies: string
  projectLink: string

  // Articles
  articlesTitle: string
  articlesDescription: string
  title: string
  briefDescription: string

  // Contact
  contactMe: string

  // Footer
  footerDescription: string
  location: string
  copyright: string
}

export type AppLocales = 'en' | 'pt';

export type Translations = {
  [locale in AppLocales]: TranslationKey;
};