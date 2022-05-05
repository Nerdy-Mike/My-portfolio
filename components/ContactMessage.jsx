/* eslint-disable no-nested-ternary */
import React, { useState, useRef, Fragment } from 'react';
import { Dialog, Combobox, Transition } from '@headlessui/react';

function ContactMessage({ status, isOpen, setIsOpen }) {
  return (
    <div>
      {status !== '' ? (
        <Transition show={isOpen} as={Fragment}>
          <Dialog
            onClose={() => setIsOpen(false)}
            className="absolute z-50 inset-x-0 top-0 flex w-screen items-center justify-center overflow-y-auto pt-[5vh] "
          >
            <Dialog.Overlay className="fixed inset-0  bg-gray-800/90 dark:bg-gray-500/70" />
            <Transition.Child>
              <div className="my-16  flex w-full max-w-sm transform flex-col items-center overflow-hidden rounded-lg bg-white dark:bg-slate-700 p-6 text-left align-middle shadow-xl">
                <Dialog.Title as="h3" className="text-lg text-center font-medium leading-6 text-gray-900 dark:text-gray-100">

                  {status === 200
                    ? 'Message sent! I will get in touch with you shortly.' : status === 1 ? 'Please fill in all the fields with valid information. '
                      : 'Sorry, something went wrong. Please try again later or send me an email directly.'}
                </Dialog.Title>
                {/* <div className="mt-2">
              <p className="text-md text-gray-500 dark:text-gray-300">{status}</p>
            </div> */}
                <div className="mt-6 pl-6">
                  <button
                    type="button"
                    className="dark:bg-teal-600 px-8 inline-flex justify-center rounded-md border border-transparent bg-teal-200 mr-6 py-2 text-sm font-medium text-gray-900 hover:bg-primary-300  dark:text-slate-100 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    Okay
                  </button>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition>
      ) : <div />}
    </div>
  );
}

export default ContactMessage;
