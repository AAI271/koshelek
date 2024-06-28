import React from 'react';
import { Statistics } from './Statistics';
import Image from 'next/image';
import Head from 'next/head';
import pilot from '../assets/aboutImg.png';
import { useTranslations } from 'next-intl';

export const About: React.FC = () => {
  const t = useTranslations('About');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>
      <section id="about" className="container py-24 sm:py-32">
        <div className="border rounded-lg py-12">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <Image
              src={pilot}
              alt={t('pilotAlt')}
              className="w-[300px] object-contain rounded-lg"
              placeholder="blur"
              blurDataURL="../assets/pilot.png"
              loading="lazy"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text pr-3">
                    {t('about')}
                  </span>
                  {t('company')}
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  {t('descriptionText')}
                </p>
              </div>
              <Statistics />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
