import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

function LoadingScreen() {
  const quotes = ['Change is the essential process of all existence. — Spock', 'Live long and prosper - Spock', 'Nothing happens until something moves - Albert Einstein', 'The only time success comes before work is in the dictionary - Harvey Specter'];
  const [isShowed, setIsShowed] = useState(true);
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
  useEffect(() => {
    setTimeout(() => { setIsShowed(false); }, 2000);
  }, []);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-center text-white text-3xl">
        <Transition
          show={isShowed}
          enter="transition-opacity ease-linear duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {quote}
        </Transition>
      </div>
    </div>
  );
}

export default LoadingScreen;
