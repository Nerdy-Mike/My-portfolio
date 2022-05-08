import React from 'react';

function Instructions() {
  const commands = ['about', 'showprojects', 'contact', 'clear'];
  return (
    <div className="container mx-auto pt- md:pt-2 w-screen">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto mb-2">
        <p className="text-base md:hidden text-center dark:text-gray-400 font-normal xl:w-10/12 xl:mx-auto">Valid commands:</p>
      </div>
      <div className=" grid-cols-4 hidden md:grid">
        <div className="col-span-1 hidden md:block justify-center 3xl:pb-10 pb-2 items-center dark:text-gray-400">
          <p className="text-center">Valid commands:</p>
        </div>
        <div className="col-span-3 flex flex-col">

          <div className="grid grid-cols-2 pb-6">
            <div className="3xl:pb-10 pb-2 dark:text-gray-300 t text-gray-600">
              <p className="text-center">whoami: About me</p>
            </div>
            <div className=" 3xl:pb-10 pb-2 items-center dark:text-gray-300 text-gray-600">
              ls: Show projects
            </div>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="3xl:pb-10 pb-2 items-center dark:text-gray-300 text-gray-600">
              open blog: Open blog

            </div>
            <div className=" 3xl:pb-10 pb-2 items-center dark:text-gray-300 text-gray-600">
              contact: Contact me
            </div>
            <div className=" 3xl:pb-10 pb-2 items-center dark:text-gray-300 text-gray-600">
              clear: Clear terminal
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: */}
      <div className="flex flex-row justify-between px-14 md:hidden">

        <div className="flex flex-col items-center">
          <div className="3xl:pb-10 pb-2 dark:text-gray-300 text-gray-600">
            whoami: About me
          </div>
          <div className=" 3xl:pb-10 pb-2 items-center dark:text-gray-300 text-gray-600">
            ls: Show projects
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="3xl:pb-10 pb-2 items-center dark:text-gray-300 text-gray-600">
            open blog: Open blog

          </div>
          <div className=" 3xl:pb-10 pb-2 items-center dark:text-gray-300 text-gray-600">
            contact: Contact me
          </div>
          <div className=" 3xl:pb-10 pb-2 items-center dark:text-gray-300 text-gray-600">
            clear: Clear terminal
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
