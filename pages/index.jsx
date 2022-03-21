import Head from 'next/head';
import Image from 'next/image';
import HeroLeft from '@/components/HeroLeft';
import Terminal from '@/components/Terminal';
import Instructions from '@/components/Instructions';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';

function Home() {
  return (
    <div className=" w-screen pt-8 max-h-screen 3xl:pt-48 overflow-hidden">
      <div className="container px-2  mx-auto my-auto lg:flex py-20 ">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <HeroLeft />
        </div>
        <div className="flex items-center justify-center w-full lg:h-96 h-80 lg:w-1/2">
          <Terminal />
        </div>
      </div>
      <Instructions />
    </div>
  );
}

export default Home;
