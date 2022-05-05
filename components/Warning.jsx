import React, { useState, useRef, Fragment } from 'react';
import { Dialog, Combobox, Transition } from '@headlessui/react';

function Warning({ message, isOpen, setIsOpen }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const setShowBlog = () => {
    openInNewTab('https://my-blog-nerdy-mike.vercel.app/');
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={() => setIsOpen(false)}
        className="absolute z-50 inset-x-0 top-0 flex w-screen items-center justify-center overflow-y-auto pt-[5vh] "
      >
        <Dialog.Overlay className="fixed inset-0  bg-gray-800/90 dark:bg-gray-500/70" />
        <Transition.Child>
          <div className="my-8  flex w-full max-w-sm transform flex-col items-center overflow-hidden rounded-lg bg-white dark:bg-slate-700 p-6 text-left align-middle shadow-xl">
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
              Oh Hi there 👋
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-md text-gray-500 dark:text-gray-300">{message}</p>
            </div>
            <div className="mt-4 pl-6">
              <button
                type="button"
                className=" inline-flex justify-center rounded-md border border-transparent bg-slate-200 px-2 mr-6 py-2 text-sm font-medium text-gray-900 hover:bg-primary-300 dark:bg-slate-800 dark:text-slate-300 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                No, stay here
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-slate-200 px-2 mr-6 py-2 text-sm font-medium text-gray-900 hover:bg-primary-300 dark:bg-slate-800 dark:text-slate-300 focus:outline-none"
                onClick={() => { setShowBlog(); setIsOpen(false); }}
              >
                Process
              </button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default Warning;
