'use client';

import { useState } from 'react';
import { useI18n } from '../i18n/i18n-provider';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import LinkNav from '../ui/LinkNav';
import Brand from '../components/brand/Brand';
import ButtonMenu from '../ui/ButtonMenu';
import ButtonLSwitcher from '../ui/ButtonLSwitcher';

export default function Header() {
  const { t, locale, changeLocale } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => changeLocale(locale === 'pt' ? 'en' : 'pt');

  return (
    <header className="bg-mocha-black text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Brand/>
        <ButtonMenu
          onClick={toggleMenu}
          content={isMenuOpen ? <IoClose size={24} /> : <BiMenu size={24} />}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <LinkNav href="#" content={t('home')} />
          <LinkNav href="#services" content={t('services')} />
          <LinkNav href="#skills" content={t('skills')} />
          <LinkNav href="#projects" content={t('projects')} />
          <LinkNav href="#articles" content={t('articles')} />
          <LinkNav href="#contact" content={t('contact')} />
        </nav>

        {/* Language Switcher */}
        <ButtonLSwitcher
          onClick={toggleLanguage}
          content={locale === 'pt' ? 'EN' : 'BR'}
        />
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-mocha-black py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <LinkNav href="#" content={t('home')} onClick={toggleMenu} />
            <LinkNav
              href="#services"
              content={t('services')}
              onClick={toggleMenu}
            />
            <LinkNav
              href="#skills"
              content={t('skills')}
              onClick={toggleMenu}
            />
            <LinkNav
              href="#projects"
              content={t('projects')}
              onClick={toggleMenu}
            />
            <LinkNav
              href="#articles"
              content={t('articles')}
              onClick={toggleMenu}
            />
            <LinkNav
              href="#contact"
              content={t('contact')}
              onClick={toggleMenu}
            />
          </nav>
        </div>
      )}
    </header>
  );
}
