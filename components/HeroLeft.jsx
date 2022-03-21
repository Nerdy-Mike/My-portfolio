import React from 'react';
import { Transition } from '@headlessui/react';
import Link from './Link';
import siteMetadata from '../data/siteMetadata';
import SocialIcon from './social-icons';

function HeroLeft() {
  return (
    <Transition
      appear
      show={true}
      enter="transition duration-1000 transform"
      enterFrom="translate-y-48 opacity-0"
      enterTo="translate-x-0 opacity-100"
      leave="transition  duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="px-4 md:px-0 max-w-lg flex flex-col justify-between items-center">
        <h1 className="text-xl tracking-wide  text-gray-800 dark:text-gray-200  lg:text-4xl">
          Hi, I'm
          {' '}
          <span className="font-semibold">Michael</span>
        </h1>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          A junior software engineer based in Adelaide, currently doing intership at Fivecast. I'm a huge fan of the web and its architecture.
        </p>
        <p>
          My Blog
        </p>
        <div className="">
          <div className="mb-3 flex space-x-4 pt-4 ">
            <SocialIcon
              className=""
              kind="mail"
              href={`mailto:${siteMetadata.email}`}
              size="6"
            />
            <SocialIcon kind="github" href={siteMetadata.github} size="6" />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          </div>
        </div>

      </div>
    </Transition>
  );
}

export default HeroLeft;
