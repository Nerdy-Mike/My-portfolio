/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment, useState } from 'react';
import { Dialog, Combobox, Transition } from '@headlessui/react';
import { send } from 'emailjs-com';
import CloseButton from './buttons/CloseButton';
import ContactMessage from './ContactMessage';

function Contact({ isContactOpen, setIsContactOpen }) {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [toSend, setTosend] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const handleChange = (e) => {
    setTosend({
      ...toSend,
      [e.target.name]: e.target.value,
    });
  };

  const handleSummit = (e) => {
    e.preventDefault();
    if (toSend.name === '' || toSend.email === '' || toSend.subject === '' || toSend.message === '') {
      setStatus('Please fill in all the fields.');
      setIsMessageOpen(true);
      return;
    }
    send(
      'service_kojpcin',
      'template_nmdk32a',
      toSend,
      '7aWjxE3_lfznRjU8K',
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus(response.status);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    setIsContactOpen(false);
    setIsMessageOpen(true);
  };
  return (
    <div>
      <ContactMessage status={status} isOpen={isMessageOpen} setIsOpen={setIsMessageOpen} />

      <Transition show={isContactOpen} as={Fragment}>
        <Dialog
          onClose={() => { setIsContactOpen(false); }}
          className="fixed inset-0 z-50 overflow-auto p-4 pt-[20vh] 3xl:pt-[30vh] "
        >
          <Dialog.Overlay className="absolute inset-0 bg-gray-600/95" />
          <div className=" flex flex-wrap items-center justify-center ">

            <form className="w-11/12 md:w-7/12 bg-gray-200 dark:bg-gray-800 z-10 p-10 relative rounded-md" onSubmit={(e) => handleSummit(e)}>
              <div className="dark:text-gray-300 text-2xl pb-6">
                Contact me
              </div>
              <CloseButton closeModal={() => setIsContactOpen(false)} />
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                  <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                  <input
                    type="text"
                    id="base-input"
                    name="name"
                    value={toSend.name}
                    onChange={(e) => handleChange(e)}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none  block w-full p-2.5 dark:bg-gray-700  dark:text-white "
                  />
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                  <input
                    type="text"
                    id="base-input"
                    name="email"
                    value={toSend.email}
                    onChange={(e) => handleChange(e)}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none  block w-full p-2.5 dark:bg-gray-700  dark:text-white "
                  />
                </div>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input
                  type="text"
                  id="base-input"
                  name="subject"
                  value={toSend.subject}
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none  block w-full p-2.5 dark:bg-gray-700  dark:text-white "
                />
              </div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea
                id="message"
                rows="4"
                name="message"
                value={toSend.message}
                onChange={(e) => handleChange(e)}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none  block w-full p-2.5 dark:bg-gray-700  dark:text-white"
                placeholder="Type away..."
              />
              <div className="flex justify-end pt-2">
                <button type="submit" className=" text-gray-600 dark:text-white bg-teal-300 dark:bg-teal-600  font-medium rounded-md text-sm w-full sm:w-auto px-8 py-2.5 text-right mt-4">Submit</button>
              </div>
            </form>
          </div>

        </Dialog>
      </Transition>
    </div>
  );
}

export default Contact;
