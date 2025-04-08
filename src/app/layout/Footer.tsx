'use client';

import { useI18n } from '../i18n/i18n-provider';
import Brand from '../components/brand/Brand';
import Location from '../ui/Location';
import LinkNav from '../ui/LinkNav';
import CopyRight from '../ui/CopyRight';
import ContactMe from '../ui/ContactMe';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-mocha-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          <div className="flex flex-col gap-4">
            <Brand/>

            <p className="text-gray-400 mb-4">{t('footerDescription')}</p>

            <Location content={t('location')} />
          </div>

          <div>
            <h3 className="text-white text-xl mb-4">{t('categories')}</h3>
            <nav className="flex flex-col space-y-2">
              <LinkNav href="#" content={t('home')} />
              <LinkNav href="#services" content={t('services')} />
              <LinkNav href="#skills" content={t('skills')} />
              <LinkNav href="#projects" content={t('projects')} />
              <LinkNav href="#articles" content={t('articles')} />
              <LinkNav href="#contact" content={t('contact')} />
            </nav>
          </div>

          <ContactMe content={t('contactMe')} />
        </div>

        <CopyRight content={t('copyright')} />
      </div>
    </footer>
  );
}
