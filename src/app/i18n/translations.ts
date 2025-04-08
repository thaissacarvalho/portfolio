import { Translations } from '../types/i18n';

export const translations: Translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    skills: "Skills",
    projects: "Projects",
    articles: "Articles",
    contact: "Contact",
    categories: "Categories",

    // Hero 
    developer: "BACKEND DEVELOPER",
    heroDescription:
      "I'm Thaissa - a backend developer with a passion for creating efficient and innovative solutions.",

    // Stats
    yearExperience: "YEAR OF EXPERIENCE",
    projectsDeveloped: "PROJECTS DEVELOPED ACROSS BRAZIL",

    // Services
    serviceTitle: "SERVICES",
    apiDevelopment: "API Development and Integration",
    apiDescription:
      "REST API development to integrate systems and external services, as well as authentication and authorization.",
    databaseManagement: "Database Management and System Optimization",
    databaseDescription:
      "Installation and administration of SQL and NoSQL databases, with query optimization and indexing.",
    devOps: "Infrastructure and DevOps",
    devOpsDescription: "Deployment and setup on AWS, automation and CI/CD with Docker and cloud configuration.",

    // Skills
    mySkills: "Skills",
    skillsDescription: "The skills, tools and technologies that I have:",

    // Projects
    projectsTitle: "Projects",
    projectsList: [
      {
        id: 1,
        title: "System Comment",
        description: "A comment system with authentication, allowing users to create, edit and delete comments. Built with Node.js, Prisma and PostgreSQL.",
        technologies: ["Node.js", "Express", "Prisma", "PostgreSQL", "JWT"],
        link: "https://github.com/thaissacarvalho/system-comment-back-end"
      },
      {
        id: 2,
        title: "Ecommerce Full Stack",
        description: "Complete e-commerce application with products, categories and shopping cart functionality.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        link: "https://github.com/thaissacarvalho/e-commerce-full-stack"
      },
      {
        id: 3,
        title: "Back End Logister",
        description: "Designed to manage user registration and login. It uses bcrypt to encrypt passwords and JWT for authentication and authorization, ensuring that user data is protected and API access is secure.",
        technologies: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose"],
        link: "https://github.com/thaissacarvalho/back-end-logister"
      }
    ],
    // Articles
    articlesTitle: "Articles",
    title: "Title",
    briefDescription: "Brief description...",

    // Contact
    contactMe: "Contact me",

    // Footer
    footerDescription: "Thank you for exploring my website. I'm always open to exciting new contacts.",
    location: "Rio de Janeiro, Brazil",
    copyright: "© 2024 THAISSA CARVALHO. ALL RIGHTS RESERVED",
  },
  pt: {
    // Navegação
    home: "Início",
    services: "Serviços",
    skills: "Habilidades",
    projects: "Projetos",
    articles: "Artigos",
    contact: "Contatos",
    categories: "Categorias",

    // Hero
    developer: "DESENVOLVEDORA BACK END",
    heroDescription:
      "Eu sou a Thaissa - desenvolvedora back end com a paixão para criar soluções eficientes e inovadoras.",

    // Estatísticas
    yearExperience: "ANO DE EXPERIÊNCIA",
    projectsDeveloped: "PROJETOS DESENVOLVIDOS AO REDOR DO BRASIL",

    // Serviços
    serviceTitle: "SERVIÇOS",
    apiDevelopment: "Desenvolvimento e Integração de APIs",
    apiDescription:
      "Eu crio APIs REST, integro sistemas e serviços externos, além de fazer autenticação e autorização.",
    databaseManagement: "Gerenciamento de Banco de Dados e Otimização de Sistemas",
    databaseDescription:
      "Instalação e administração de bancos de SQL e NoSQL, com a otimização de consultas e indexação.",
    devOps: "Infraestrutura e DevOps",
    devOpsDescription: "Gerenciamento e deploy em cloud AWS, automações e CI/CD com Docker e configuração em nuvem.",

    // Habilidades
    mySkills: "Habilidades",
    skillsDescription: "As habilidades, ferramentas e tecnologias que eu tenho:",

    // Projetos
    projectsTitle: "Projetos",
    projectsList: [
      {
        id: 1,
        title: "System Comment",
        description: "Sistema de comentários com autenticação, permitindo que usuários criem, editem e deletem comentários. Construído com Node.js, Prisma e PostgreSQL.",
        technologies: ["Node.js", "Express", "Prisma", "PostgreSQL", "JWT"],
        link: "https://github.com/thaissacarvalho/system-comment-back-end"
      },
      {
        id: 2,
        title: "Ecommerce Full Stack",
        description: "Aplicação completa de e-commerce com produtos, categorias e funcionalidade de carrinho de compras.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        link: "https://github.com/thaissacarvalho/e-commerce-full-stack"
      },
      {
        id: 3,
        title: "Back End Logister",
        description: "Projetada para gerenciar o registro e o login de usuários. Utiliza bcrypt para criptografar senhas e JWT para autenticação e autorização, garantindo que os dados dos usuários sejam protegidos e que o acesso à API seja seguro.",
        technologies: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose"],
        link: "https://github.com/thaissacarvalho/back-end-logister"
      }
    ],
    // Artigos
    articlesTitle: "Artigos",
    title: "Título",
    briefDescription: "Breve descrição...",

    // Contato
    contactMe: "Contate-me",

    // Rodapé
    footerDescription: "Obrigado por explorar o meu website. Eu sempre estou aberta a possíveis novos contatos.",
    location: "Rio de Janeiro, Brasil",
    copyright: "© 2024 THAISSA CARVALHO. TODOS OS DIREITOS RESERVADOS",
  },
} as const;

