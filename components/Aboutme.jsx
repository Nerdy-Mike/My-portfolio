/* eslint-disable max-len */
import React, { useState, useRef, Fragment } from 'react';
import { Dialog, Combobox, Transition } from '@headlessui/react';
import CloseButton from './buttons/CloseButton';

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
        <div className=" flex flex-wrap items-center justify-center h-5/6 overflow-y-scroll ">
          <div className="easy-in-out container md:w-9/12 transform rounded-lg  shadow-lg duration-200 bg-gray-200 dark:bg-gray-800 mt-14 md:mt-0">
            <div className="-mt-12 flex flex-row justify-start px-5">
              <span clspanss="block relative">
                <img
                  alt="by aldi sigun on Unsplash"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="mx-auto h-28 w-36 md:w-32 rounded-full bg-white object-cover p-1 "
                />
              </span>
              <div className="mt-12 pl-4 flex flex-row justify-between w-full">
                <div>
                  <h2 className="text-3xl font-bold text-primary-600 dark:text-gray-400">
                    Michael Le
                  </h2>
                  <p className=" text-gray-500 dark:text-gray-400">Software Engineer</p>
                </div>
              </div>
              <CloseButton closeModal={closeModal} />
            </div>
            <div className="md:px-8 px-2">
              {/* Specialies */}
              <div className="flex flex-col md:flex-row py-6">
                <div className="pr-2 border-b md:border-b-0 md:border-r dark:border-white border-black flex items-center flex-col pb-4">
                  <p className="text-lg font-bold dark:text-gray-300">Web Developer</p>
                  <p className="text-gray-800 dark:text-gray-300">Modern and mobile-ready website that will help you reach all of your marketing.</p>
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
                    <div>
                      <svg width="50px" height="50px" viewBox="0 150 900 1200">
                        <title>Vector 1</title>
                        <desc>Created with Sketch.</desc>
                        <path id="Shape" opacity="0.45" enableBackground="new    " d="M371.772,135.308L241.068,367.61H-20.158l130.614-232.302     H371.772" />
                        <path id="Shape_1_" opacity="0.6" enableBackground="new    " d="M241.068,367.61h261.318L371.772,135.308H110.456     L241.068,367.61z" />
                        <path id="Shape_2_" opacity="0.8" enableBackground="new    " d="M110.456,599.822L241.068,367.61L110.456,135.308     L-20.158,367.61L110.456,599.822z" />
                        <path id="Shape_3_" opacity="0.45" enableBackground="new    " d="M111.721,948.275l130.704-232.303h261.318L373.038,948.275     H111.721" />
                        <path id="Shape_4_" opacity="0.6" enableBackground="new    " d="M242.424,715.973H-18.893l130.613,232.303h261.317     L242.424,715.973z" />
                        <path id="Shape_5_" opacity="0.8" enableBackground="new    " d="M373.038,483.761L242.424,715.973l130.614,232.303     l130.704-232.303L373.038,483.761z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:pl-6 flex items-center flex-col md:pt-0 pt-4">
                  <p className="text-lg font-bold dark:text-gray-300">ML Engineer</p>
                  <p className="text-gray-800 dark:text-gray-300">Modern and mobile-ready website that will help you reach all of your marketing.</p>
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
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                Timeline
              </div>
              <ol className="items-center hidden md:flex pt-4">
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-1.5 border border-gray-500 dark:border-gray-600 dark:bg-gray-600" />

                    <div className="hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-gray-600" />
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">University Of Adelaide</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">2018-2021</time>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-1.5 border border-gray-500 dark:border-gray-600 dark:bg-gray-600" />

                    <div className="hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-gray-600" />
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fivecast</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">August 2021 - April 2022</time>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-1.5 border border-gray-500 dark:border-gray-600 dark:bg-gray-600" />

                    <div className="hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-gray-600" />
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Freelancer</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500"> 2022</time>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
                  </div>
                </li>
              </ol>

              <ol className="relative border-l border-gray-200 dark:border-gray-700 mx-4 md:hidden">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">2018-2021</time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">University Of Adelaide</h3>
                  <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>

                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">August 2021 - April 2022</time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fivecast</h3>
                  <p className="text-base font-normal text-gray-700 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">2022</time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Freelancer</h3>
                  <p className="text-base font-normal text-gray-700 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
              </ol>
              {/* End timeline */}
              <div className=" pt-4">
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Languages: Javascript, Swift, Python, Java, SQL, HTML, CSS, Solidity
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  For work: React, Next.js, Tailwind, PostQL, NoSQL, Flask
                </p>
              </div>

            </div>
          </div>
        </div>
        {/* End About me */}
      </Dialog>
    </Transition>
  );
}

export default AboutMe;
