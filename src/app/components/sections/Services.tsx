'use client';

import TitleSection from '@/app/ui/TitleSection';
import { useI18n } from '../../i18n/i18n-provider';
import { FaDatabase, FaServer, FaCloud } from 'react-icons/fa';
import ServiceCard from '@/app/ui/ServiceCard';

export default function Services() {
  const { t } = useI18n();

  return (
    <section className="p-8" id="services">
      <div className="flex flex-col gap-6 p-4">
       <TitleSection content={t('services')}/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceCard contentI={FaServer} contentT={t('apiDevelopment')} contentP={t('apiDescription')}/>
          <ServiceCard contentI={FaDatabase} contentT={t('databaseManagement')} contentP={t('databaseDescription')}/>
          <ServiceCard contentI={FaCloud} contentT={t('devOps')} contentP={t('devOpsDescription')}/>
        </div>
      </div>
    </section>
  );
}