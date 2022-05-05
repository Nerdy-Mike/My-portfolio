/* eslint-disable max-len */
import React, { useState, useRef, Fragment } from 'react';
import { Dialog, Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import CloseButton from './buttons/CloseButton';
import MyImage from '../data/me.jpg';

function AboutMe({ isAboutMeOpen, setShowAboutme }) {
  const closeModal = () => {
    setShowAboutme(false);
  };

  return (
    <Transition show={isAboutMeOpen} as={Fragment}>
      <Dialog
        onClose={() => setShowAboutme(false)}
        className="fixed inset-0 z-50 overflow-auto p-4 pt-16 md:pt-[5vh] 3xl:pt-[15vh]"
      >
        <Dialog.Overlay className="absolute inset-0 bg-gray-800/95 dark:bg-gray-700/90" />
        {/* Start of About me */}
        <div className=" flex flex-wrap items-center justify-center h-5/6 pt-12">
          <div className="easy-in-out container md:w-9/12 transform rounded-lg  shadow-lg duration-200 bg-gray-200 dark:bg-gray-800 mt-14 md:mt-0">
            <div className="-mt-12 flex flex-row justify-start px-5">
              <span clspanss="block relative ">
                <Image
                  alt="by aldi sigun on Unsplash"
                  src={MyImage}
                  width={150}
                  height={150}
                  // className="mx-auto h-28 w-36 md:w-32 rounded-full bg-white object-cover p-1 "
                  className="mx-auto rounded-full  object-cover"
                />
              </span>
              <div className="mt-14 pl-4 flex flex-row justify-between w-full">
                <div>
                  <h2 className="text-3xl font-bold text-primary-600 dark:text-gray-300">
                    Michael Le
                  </h2>
                  <p className=" text-gray-500 dark:text-gray-300">Software Engineer</p>
                </div>
              </div>
              <CloseButton closeModal={closeModal} />
            </div>
            <div className="flex text-center w-full justify-center">
              <p className="text-primary-600 dark:text-gray-200">
                Hi there! I'm a software engineer, interested in web development, and cloud computing.
                <br />
                If you have a job or project you would like to discuss, please don't hesitate to get in touch.
                <br />
              </p>

            </div>
            <div className="md:px-8 px-2 ">
              {/* Specialies */}
              <div className="flex flex-col md:flex-row py-6 ">
                <div className="pr-2 border-b md:border-b-0 md:border-r dark:border-white border-black flex items-center flex-col pb-4 text-center">
                  <p className="text-xl font-bold dark:text-gray-300 pb-2">Web Developer</p>
                  <p className="text-gray-800 dark:text-gray-200 ">Modern and mobile-ready website that will help you reach all of your marketing.</p>
                  <div className="flex flex-row justify-between">

                    <img className="h-8 px-1" alt="react" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                    <img className="h-8 px-1" alt="nodejs" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
                    <img className="h-8 px-1" alt="nextjs" src="https://huudoanh.com/content/images/2019/10/nextjs-banner-1.png" />
                    <img className="h-9 px-1" alt="swift" src="https://img.icons8.com/color/48/000000/swift.png" />
                    <img className="h-8 px-1" alt="git" src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/github.svg" />
                    <img className="h-8 px-1" alt="mongodb" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
                    <svg viewBox="0 0 50 31" className="text-slate-900 dark:text-white w-auto h-5 px-1 "><path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8" /></svg>
                    <img className="h-8 px-1" alt="mongodb" src="https://www.postgresql.org/media/img/about/press/elephant.png" />
                    <img className="h-8 px-1" alt="graphql" src="https://raw.githubusercontent.com/github/explore/5c058a388828bb5fde0bcafd4bc867b5bb3f26f3/topics/graphql/graphql.png" />

                  </div>
                </div>
                <div className="md:pl-6 flex items-center flex-col md:pt-0 pt-4 text-center">
                  <p className="text-xl font-bold dark:text-gray-300 pb-2">ML Engineer</p>
                  <p className="text-gray-800 dark:text-gray-200">Modern and mobile-ready website that will help you reach all of your marketing.</p>
                  <div className="flex flex-row justify-between">
                    <img className="h-8 px-1" alt="python" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" />
                    <svg className="text-slate-900 dark:text-white w-auto h-10 px-1 py-1" viewBox="0 0 80 120" version="1.1" alt="solidity">
                      <path id="Path" d="M63.1 28.3 L56.5 34.9 C67.3 45.7 67.3 63.1 56.5 73.7 45.7 84.5 28.3 84.5 17.7 73.7 6.9 62.9 6.9 45.5 17.7 34.9 L34.8 17.8 37.2 15.4 37.2 2.5 11.4 28.3 C-3 42.7 -3 65.9 11.4 80.3 25.8 94.7 49 94.7 63.1 80.3 77.5 65.8 77.5 42.7 63.1 28.3 Z" fill="#ee4c2c" fillOpacity="1" stroke="none" />
                      <path id="Path-1" d="M55 21.9 C55 24.551 52.851 26.7 50.2 26.7 47.549 26.7 45.4 24.551 45.4 21.9 45.4 19.249 47.549 17.1 50.2 17.1 52.851 17.1 55 19.249 55 21.9 Z" fill="#ee4c2c" fillOpacity="1" stroke="none" />
                    </svg>
                    <img className="h-8 px-1" alt="python" src="https://www.gstatic.com/devrel-devsite/prod/vea32910d5631902da7876bf3132bf2a23b4c6e7b82b4223c953da55851058027/tensorflow/images/lockup.svg" />
                  </div>
                </div>
              </div>

              {/* Start timeline */}
              <div className="text-xl font-semibold text-gray-900 dark:text-white">
                Timeline
              </div>
              <ol className="items-center hidden md:flex pt-4 pb-10">
                <li className="relative mb-6 sm:mb-0 pt-2">
                  <div className="flex items-center">
                    <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-1.5 border border-gray-500 dark:border-gray-600 dark:bg-gray-600" />

                    <div className="hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-gray-600" />
                  </div>
                  <div className="mt-3 sm:pr-16">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">University Of Adelaide</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">2018-2021</time>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-300 ">Bachelor of Computer Science</p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-1.5 border border-gray-500 dark:border-gray-600 dark:bg-gray-600" />

                    <div className="hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-gray-600" />
                  </div>
                  <div className="mt-3 sm:pr-12">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Q-Sign</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">May 2020 - Jan 2021</time>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-300">My first start up </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-1.5 border border-gray-500 dark:border-gray-600 dark:bg-gray-600" />

                    <div className="hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-gray-600" />
                  </div>
                  <div className="mt-3 sm:pr-12">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fivecast</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">August 2021 - Mar 2022</time>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-300">Intern</p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-1.5 border border-gray-500 dark:border-gray-600 dark:bg-gray-600" />

                    <div className="hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-gray-600" />
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Freelancer</h3>
                    <time className="block mb- text-sm font-normal leading-none text-gray-500 dark:text-gray-500"> 2022</time>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-300">Get started with web development and cloud computing.</p>
                  </div>
                </li>
              </ol>

              <ol className="relative border-l border-gray-200 dark:border-gray-700 mx-4 md:hidden">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">2018-2021</time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">University Of Adelaide</h3>
                  <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-300">Bachelor of Computer Science</p>

                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">May 2020 - Jan 2021</time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Q-Sign</h3>
                  <p className="text-base font-normal text-gray-700 dark:text-gray-300">My first start up.</p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">August 2021 - Mar 2022</time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fivecast</h3>
                  <p className="text-base font-normal text-gray-700 dark:text-gray-300">Intern</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">2022</time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Freelancer</h3>
                  <p className="text-base font-normal text-gray-700 dark:text-gray-300">Get started with web development and cloud computing.</p>
                </li>
              </ol>
              {/* End timeline */}
              {/* <div className=" pt-4 pb-10">
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Languages: Javascript, Swift, Python, Java, SQL, HTML, CSS, Solidity
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  For work: React, Next.js, Tailwind, PostQL, NoSQL, Flask
                </p>
              </div> */}

            </div>
          </div>
        </div>
        {/* End About me */}
      </Dialog>
    </Transition>
  );
}

export default AboutMe;
