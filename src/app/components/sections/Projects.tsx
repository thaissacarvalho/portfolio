'use client';

import TitleSection from '@/app/ui/TitleSection';
import { useI18n } from '../../i18n/i18n-provider';
import Image from 'next/image';
import { GoLinkExternal } from 'react-icons/go';

export default function Projects() {
  const { t, locale } = useI18n();

  const projects = [
    {
      id: 1,
      title: {
        en: "Portfolio Website",
        pt: "Site de Portfólio"
      },
      description: {
        en: "A personal portfolio website built with Next.js and Tailwind CSS.",
        pt: "Um site de portfólio pessoal construído com Next.js e Tailwind CSS."
      },
      technologies: ["Next.js", "Tailwind CSS", "React"],
      link: "https://example.com/portfolio",
      image: "/placeholder.svg?height=200&width=300"
    },
    // Adicione mais projetos aqui
  ];

  return (
    <section className="p-8" id="projects">
      <div className="flex flex-col gap-6 p-4">
        <TitleSection content={t('projectsTitle')}/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src={project.image}
                  alt={project.title[locale as 'en' | 'pt']}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-mocha-black p-4">
                <h3 className="font-medium text-lg mb-2">
                  {project.title[locale as 'en' | 'pt']}
                </h3>
                <p className="text-gray-300 mb-3">
                  {project.description[locale as 'en' | 'pt']}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-400">
                      {project.technologies.join(', ')}
                    </p>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-mocha-purple-light hover:text-mocha-purple transition-colors"
                  >
                    <GoLinkExternal size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}