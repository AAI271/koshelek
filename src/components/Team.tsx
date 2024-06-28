import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Emma Smith",
    position: "Product Manager",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      { name: "Facebook", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "John Doe",
    position: "Tech Lead",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      { name: "Facebook", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Ashley Ross",
    position: "Frontend Developer",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Bruce Rogers",
    position: "Backend Developer",
    socialNetworks: [
      { name: "Linkedin", url: "#" },
      { name: "Facebook", url: "#" },
    ],
  },
];

const socialIcon = (iconName: string) => {
  switch (iconName) {
    case "Linkedin":
      return <Linkedin size="20" />;
    case "Facebook":
      return <Facebook size="20" />;
    case "Instagram":
      return <Instagram size="20" />;
    default:
      return null;
  }
};

export const Team: React.FC = () => {
  const t = useTranslations('Team');

  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
        <meta name="description" content={t('head.description')} />
      </Head>
      <section id="team" className="container py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {t('titlePrefix')}
          </span>
          {t('titleSuffix')}
        </h2>

        <p className="mt-4 mb-10 text-xl text-muted-foreground">
          {t('description')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
          {teamList.map(({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card key={name} className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center">
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <Image
                  src={imageUrl}
                  alt={`${name} - ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 object-cover"
                  width={96}
                  height={96}
                  placeholder="blur"
                  blurDataURL={imageUrl}
                  loading="lazy"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">{position}</CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{t('teamMemberDescription')}</p>
              </CardContent>

              <CardFooter className="flex justify-center gap-2">
                {socialNetworks.map(({ name, url }: SocialNetworkProps) => (
                  <a
                    key={name}
                    rel="noreferrer noopener"
                    href={url}
                    target="_blank"
                    className="p-2 text-primary"
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};
