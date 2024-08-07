import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { MagnifierIcon, WalletIcon, ChartIcon } from './Icons';
import Image from 'next/image';
import Head from 'next/head';
import cubeLeg from '../assets/cube-leg.png';
import { useTranslations } from 'next-intl';

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const Services: React.FC = () => {
  const t = useTranslations('Services');

  const serviceList: ServiceProps[] = [
    {
      title: t('cryptocurrencyStaking.title'),
      description: t('cryptocurrencyStaking.description'),
      icon: <ChartIcon />,
    },
    {
      title: t('secureWalletManagement.title'),
      description: t('secureWalletManagement.description'),
      icon: <WalletIcon />,
    },
    {
      title: t('realTimeAnalytics.title'),
      description: t('realTimeAnalytics.description'),
      icon: <MagnifierIcon />,
    },
  ];

  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {t('titlePrefix')}
              </span>
              {t('titleSuffix')}
            </h2>
            <p className="text-muted-foreground text-xl mt-4 mb-8">
              {t('description')}
            </p>
            <div className="flex flex-col gap-8">
              {serviceList.map(({ icon, title, description }: ServiceProps) => (
                <Card key={title}>
                  <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                      {icon}
                    </div>
                    <div>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription className="text-md mt-2">
                        {description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <Image
            src={cubeLeg}
            alt={t('imageAlt')}
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
            placeholder="blur"
            blurDataURL="../assets/cube-leg.png"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};
