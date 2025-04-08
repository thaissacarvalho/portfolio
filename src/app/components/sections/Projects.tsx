'use client';

import TitleSection from '@/app/ui/TitleSection';
import { useI18n } from '../../i18n/i18n-provider';
import { GoLinkExternal } from 'react-icons/go';

export default function Projects() {
  const { t } = useI18n();

  return (
    <section className="p-8 pb-3" id="projects">
      <div className="flex flex-col gap-8 p-4">
        <TitleSection content={t('projectsTitle')} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t('projectsList').map((project) => (
            <div key={project.id} className="h-full">
              <div className="project-card group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="bg-mocha-black p-4 flex-grow flex flex-col">
                  <h3 className="font-medium text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
