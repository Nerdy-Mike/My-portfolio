/* eslint-disable react/no-array-index-key */
import React, { useState, Fragment } from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import CloseButton from './buttons/CloseButton';
import ProjectCard from './ProjectCard';

function Projects({ isShowProjectsOpen, setIsShowProjectsOpen }) {
  const closeModal = () => {
    setIsShowProjectsOpen(false);
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  const [categories, setCategories] = useState(0);

  const webProjects = [
    {
      name: 'Tropical C',
      id: 1,
      url: 'https://tropical-of-c-frontend.vercel.app/',
      desc: 'Full-stack ecommerce website built with Nextjs, Tailwind, Nodejs, and MongoDB.',
      tags: ['Nextjs', 'Node', 'MongoDB', 'Tailwind'],
    },
    {
      name: 'AWS Face Recognition',
      id: 2,
      url: 'https://github.com/Nerdy-Mike/AWS-FaceRekognition',
      desc: 'AWS Lambda function that uses AWS Rekognition to detect celebrity faces in an image.',
      tags: ['AWS', 'React'],
    },
    {
      name: 'My Blog',
      id: 3,
      url: 'https://my-blog-nerdy-mike.vercel.app/',
      desc: 'Markdown powered blog configured with the latest technologies.',
      tags: ['Nextjs', 'Tailwind'],
    },
    {
      name: 'Pathfinding Visualizer',
      id: 8,
      url: 'https://github.com/Nerdy-Mike/Chat-Messaging-App-Light-and-Dark-Theme',
      desc: 'React application visualizes 7 pathfinding and 4 maze generation algorithms.',
      tags: ['React'],
    },
    {
      name: 'Chat App',
      id: 7,
      url: 'https://github.com/Nerdy-Mike/Chat-Messaging-App-Light-and-Dark-Theme',
      desc: 'Learn Dart and build a chat app with a dark and light theme.',
      tags: ['Dart', 'Swift', 'Ruby'],
    },
  ];
  const MLProjects = [
    {
      name: 'ML vs Flappy Bird',
      id: 4,
      url: '/',
      desc: 'Recreate the game and train a Neural Network using NEAT algorithms.',
      tags: [],
    },
    {
      name: 'Titanic - Machine Learning from Disaster',
      id: 5,
      url: 'https://www.kaggle.com/code/mauhoang/top-2-score-through-simple-feature-engineering/edit',
      desc: 'Train a machine learning model to predict the survival of the Titanic passenger using  feature engineering.',
      tags: [],
    },
    {
      name: 'Play game with OpenCV',
      id: 6,
      url: 'https://github.com/Nerdy-Mike/ComputerVision-OpenCV',
      desc: 'First hand on OpenCV with Python.',
      tags: [],
    },
  ];
  return (
    <Transition show={isShowProjectsOpen} as={Fragment}>
      <Dialog
        onClose={() => setIsShowProjectsOpen(false)}
        className="fixed inset-0 z-50  p-4  pt-[9vh] 3xl:pt-[10vh]"
      >
        <Dialog.Overlay className="absolute inset-0 bg-gray-800/95 dark:bg-gray-700/90" />
        {/* Start of Projects */}
        <div className=" flex flex-wrap items-center justify-center ">

          <div className=" py-4 sm:px-0 easy-in-out container md:w-10/12 transform rounded-lg  shadow-lg duration-200 bg-gray-200 dark:bg-gray-800">
            <CloseButton closeModal={() => closeModal()} />
            <div className="dark:text-gray-300 items-center justify-center w-full flex p-4 text-lg font-bold">
              My Projects
            </div>
            <Tab.Group>
              <Tab.List className="flex pb-6 space-x-12  px-36">
                <Tab
                  className={({ selected }) => classNames(
                    'w-full rounded-lg',
                    selected
                      ? ' bg-gray-300 text-gray-500 hover:bg-gray-400 '
                      : 'bg-gray-500 text-gray-200 shadow',
                  )}
                  type="button"
                >
                  <button
                    className="w-full ring-white ring-opacity-60 py-2.5 text-sm font-medium text-gray-700 "
                    type="button"
                    onClick={() => setCategories(0)}
                  >
                    Web dev

                  </button>
                </Tab>
                <Tab
                  className={({ selected }) => classNames(
                    'w-full rounded-lg ',
                    selected
                      ? ' bg-gray-300 text-gray-500 hover:bg-gray-400 '
                      : 'bg-gray-500 text-gray-200 shadow',
                  )}
                  type="button"
                >
                  <button
                    className="w-full ring-white ring-opacity-60 py-2.5 text-sm font-medium text-gray-700 "
                    type="button"
                    onClick={() => setCategories(1)}
                  >
                    AI/ML

                  </button>
                </Tab>
              </Tab.List>
              <Tab.Panels className="p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 overflow-auto max-h-4/5">

                {categories === 1
                  ? MLProjects.map((project) => (
                    <div key={project.id}><ProjectCard project={project} /></div>
                  ))
                  : webProjects.map((project) => (
                    <div key={project.id}><ProjectCard project={project} /></div>
                  ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        {/* End Projects */}
      </Dialog>
    </Transition>

  );
}

export default Projects;
