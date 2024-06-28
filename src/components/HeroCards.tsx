import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Check, Linkedin } from 'lucide-react';
import { LightBulbIcon } from './Icons';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

export const HeroCards: React.FC = () => {
  const t = useTranslations('HeroCards');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>
      <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
        {/* Testimonial */}
        <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar>
              <AvatarImage
                alt={t('testimonial.avatarAlt')}
                src="https://sneg.top/uploads/posts/2023-06/1687686542_sneg-top-p-khoroshie-avatarki-dlya-yutuba-instagram-29.jpg"
                loading="lazy"
              />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <CardTitle className="text-lg">A-A-I</CardTitle>
              <CardDescription>@AltajanovAbylay@gmail.com</CardDescription>
            </div>
          </CardHeader>
          <CardContent>{t('testimonial.content')}</CardContent>
        </Card>

        {/* Team */}
        <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="mt-8 flex justify-center items-center pb-2">
            <Image
              src="https://i.pravatar.cc/150?img=58"
              alt={t('teamMember.imageAlt')}
              className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
              width={96}
              height={96}
              placeholder="blur"
              blurDataURL="https://i.pravatar.cc/150?img=58"
              loading="lazy"
            />
            <CardTitle className="text-center">John Doe</CardTitle>
            <CardDescription className="font-normal text-primary">{t('teamMember.role')}</CardDescription>
          </CardHeader>
          <CardContent className="text-center pb-2">
            <p>{t('teamMember.description')}</p>
          </CardContent>
          <CardFooter>
            <div>
              <a
                href="#"
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}
              >
                <span className="sr-only">{t('teamMember.githubAlt')}</span>
                <GitHubLogoIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}
              >
                <span className="sr-only">{t('teamMember.twitterAlt')}</span>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-foreground w-5 h-5"
                >
                  <title>Twitter</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a
                href="#"
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}
              >
                <span className="sr-only">{t('teamMember.linkedinAlt')}</span>
                <Linkedin size="20" />
              </a>
            </div>
          </CardFooter>
        </Card>

        {/* Cryptocurrency Staking Service */}
        <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {t('staking.title')}
              <Badge variant="secondary" className="text-sm text-primary">
                {t('staking.popular')}
              </Badge>
            </CardTitle>
            <div>
              <span className="text-3xl font-bold">{t('staking.earnRewards')}</span>
            </div>
            <CardDescription>
              {t('staking.description')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">{t('staking.startStaking')}</Button>
          </CardContent>
          <hr className="w-4/5 m-auto mb-4" />
          <CardFooter className="flex">
            <div className="space-y-4">
              {[
                t('staking.benefit1'),
                t('staking.benefit2'),
                t('staking.benefit3'),
              ].map((benefit: string) => (
                <span key={benefit} className="flex items-center">
                  <Check className="text-green-500" />
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>

        {/* Service */}
        <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
            <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
              <LightBulbIcon />
            </div>
            <div>
              <CardTitle>{t('service.title')}</CardTitle>
              <CardDescription className="text-md mt-2">
                {t('service.description')}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};
