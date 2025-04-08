'use client';

import { useI18n } from '@/app/i18n/i18n-provider';
import ContentExperience from '@/app/ui/ContentExperience';
import React from 'react';
import { FaAws } from 'react-icons/fa';
import { SiNodedotjs, SiTypescript, SiPostgresql, SiDocker } from 'react-icons/si';

export default function Experience() {
  const { t } = useI18n();

  return (
    <section className="bg-black flex flex-col items-center gap-6 p-4 text-white md:flex-row md:justify-around md:p-6 md:gap-8">
      <ContentExperience contentT="1" contentP={t('yearExperience')} />
      <ContentExperience contentT="+5" contentP={t('projectsDeveloped')} />
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        <SiTypescript className="text-3xl md:text-4xl text-[#0765A4]" />
        <SiNodedotjs className="text-3xl md:text-4xl text-[#6CC04A]" />
        <SiPostgresql className="text-3xl md:text-4xl text-[#00758F]" />
        <SiDocker className="text-3xl md:text-4xl text-[#0288D1]" />
        <FaAws className="text-3xl md:text-4xl text-[#FF9900]" />
      </div>
    </section>
  );
}
