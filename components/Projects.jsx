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
  const [categories, setCategories] = useState({
    'Web Dev': [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    'AI/ML': [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  });

  return (
    <Transition show={isShowProjectsOpen} as={Fragment}>
      <Dialog
        onClose={() => setIsShowProjectsOpen(false)}
        className="fixed inset-0 z-50  p-4  pt-[7vh] 3xl:pt-[10vh]"
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
              <Tab.List className="flex p-1 space-x-1  px-8">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) => classNames(
                      'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg mx-4',
                      '  ring-white ring-opacity-60',
                      selected
                        ? 'bg-gray-500 text-gray-200 shadow'
                        : 'bg-gray-300 text-gray-500 hover:bg-gray-400 ',
                    )}
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      'bg-gray-200 dark:bg-gray-800 rounded-xl p-3',
                      'focus:outline-none ',
                    )}
                  >
                    <div className="p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 overflow-auto max-h-4/5">
                      <ProjectCard />
                      <ProjectCard />
                      <ProjectCard />
                      <ProjectCard />
                      <ProjectCard />
                      <ProjectCard />
                      <ProjectCard />
                      <ProjectCard />
                      <ProjectCard />
                      <ProjectCard />
                    </div>
                  </Tab.Panel>
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
