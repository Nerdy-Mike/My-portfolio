import { React, useState } from 'react';
import Logo from '@/data/logo3.svg';
import ThemeSwitch from './ThemeSwitch';

const navItems = ['About', 'Skills', 'Blog', 'Careers'];

export default function Navbar() {
  return (
    <header className="fixed z-50 top-0 w-full bg-tranparent backdrop-blur-sm">
      <nav className=" sm:px-4 py-2.5 rounded ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/#" className="flex items-center">
            <div className="max-h-20 -mt-8">
              <Logo />
            </div>
          </a>
          <div className='mt-8'>
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </header>
  );
}
