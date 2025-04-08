'use client';

import { useI18n } from '../../i18n/i18n-provider';
import Image from 'next/image';
import SocialLink from '@/app/ui/SocialLink';
import EuSorrindo from '../../../../public/eu-sorrindo.svg';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="p-8 flex justify-center">
      <div className="flex flex-col p-4 gap-8 justify-center items-center max-w-[1024px] w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#FFFFFF] to-[#490099] text-transparent bg-clip-text">
              <span className="block">{t('developer').split(' ')[0]}</span>
              <span className="block">
                {t('developer').split(' ')[1]} {t('developer').split(' ')[2]}
              </span>
            </h1>

            <p className="text-lg mb-6">{t('heroDescription')}</p>

            <div className="flex">
              <SocialLink />
            </div>
          </div>

          {/* Imagem - sempre centralizada */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src={EuSorrindo}
              alt="Thaissa Carvalho"
              width={320}
              height={320}
              className="rounded-full w-64 h-64 md:w-80 md:h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
