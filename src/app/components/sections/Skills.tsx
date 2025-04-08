'use client';

import { skillsData } from '@/app/data/skillsData';
import { useI18n } from '../../i18n/i18n-provider';
import TitleSection from '@/app/ui/TitleSection';

export default function Skills() {
  const { t } = useI18n();

  return (
    <section className="p-8" id="skills">
      <div className="flex flex-col gap-6 p-4">
        <TitleSection content={t('mySkills')} />

        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <span className="mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
