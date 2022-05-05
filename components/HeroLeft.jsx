import React from 'react';
import { Transition } from '@headlessui/react';
import siteMetadata from '../data/siteMetadata';
import Mail from '../data/social-icons/mail.svg';
import Github from '../data/social-icons/github.svg';
import Linkedin from '../data/social-icons/linkedin.svg';

function HeroLeft() {
  return (
    <Transition
      appear
      show
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
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 text-lg">
          A junior software engineer based in Adelaide, currently doing intership at Fivecast.
          I'm a huge fan of the web and its architecture.
        </p>

        <div className="">
          <div className="mb-3 flex space-x-4 pt-4 ">
            <a
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${siteMetadata.email}`}
            >
              <span className="sr-only">Git</span>
              <div
                className="fill-current text-gray-700 dark:text-gray-400 ransition dark:hover:text-gray-200 hover:text-blue-400 h-8 w-8"
              >
                <Mail />
              </div>
            </a>
            <a
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
              href={siteMetadata.github}
            >
              <span className="sr-only">Mail</span>
              <div
                className="fill-current text-gray-700 dark:text-gray-400 ransition dark:hover:text-gray-200 hover:text-blue-400 h-8 w-8"
              >
                <Github />
              </div>
            </a>
            <a
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
              href={siteMetadata.linkedin}
            >
              <span className="sr-only">Linkedin</span>
              <div
                className="fill-current text-gray-700 dark:text-gray-400 ransition dark:hover:text-gray-200 hover:text-blue-400 h-8 w-8"
              >
                <Linkedin />
              </div>
            </a>
          </div>
        </div>

      </div>
    </Transition>
  );
}

export default HeroLeft;
