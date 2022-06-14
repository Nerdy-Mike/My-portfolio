import Head from 'next/head';
import Image from 'next/image';
import HeroLeft from '../components/HeroLeft';
import Terminal from '../components/Terminal';
import Instructions from '../components/Instructions';

function Home() {
  return (
    <div className=" w-screen pt-12 h-screen overflow-hidden">
      {/* <div className="container px-2  mx-auto my-auto lg:flex py-20 h-full"> */}
      <div className="h-2/3 grid  2xl:-pt-20 md:grid-cols-2">
        <div className="flex items-center mx-auto">
          <HeroLeft />
        </div>
        {/* <div className="flex items-center justify-center w-full lg:h-96 h-80 lg:w-1/2"> */}
        <div className="flex items-center mx-auto">
          <Terminal />
        </div>
      </div>
      <Instructions />
    </div>
  );
}

export default Home;
