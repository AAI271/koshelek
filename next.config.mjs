

import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['i.pravatar.cc','sneg.top'],
    },
};
 
export default withNextIntl(nextConfig);