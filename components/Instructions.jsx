import React from 'react';

function Instructions() {
  const commands = ['about', 'showprojects', 'contact', 'clear'];
  return (
    <div className="container mx-auto ">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto mb-2">
        <p className="text-base md:hidden text-center text-gray-400 font-normal xl:w-10/12 xl:mx-auto">Valid commands</p>
      </div>
      <div className="px-10 md:px-24  flex flex-wrap">
        <div className="hidden w-6/12 xl:w-1/5 lg:w-1/5 md:w-1/5 md:block justify-center 3xl:pb-10 pb-2 items-center text-gray-500">
          Valid commands:
        </div>
        <div className="w-6/12 xl:w-1/5 lg:w-1/5 md:w-1/5 flex justify-center 3xl:pb-10 pb-2 items-center">
          whoami: About Me
        </div>
        <div className="w-6/12 xl:w-1/5 lg:w-1/5 md:w-1/5 flex justify-center 3xl:pb-10 pb-2 items-center">
          ls: Show Projects
        </div>
        <div className="w-6/12 xl:w-1/5 lg:w-1/5 md:w-1/5 flex justify-center 3xl:pb-10 pb-2 items-center">
          contact: Contact Me
        </div>
        <div className="w-6/12 xl:w-1/5 lg:w-1/5 md:w-1/5 flex justify-center 3xl:pb-10 pb-2 items-center">
          clear: Clear Terminal
        </div>
      </div>
    </div>
  );
}

export default Instructions;
