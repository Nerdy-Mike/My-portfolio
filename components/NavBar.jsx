import { React, useState } from 'react';
import Logo from '../data/logo3.svg';
import ThemeSwitch from './ThemeSwitch';

const navItems = ['About', 'Skills', 'Blog', 'Careers'];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 mx-auto flex w-full justify-center py-2 px-2 backdrop-blur-lg backdrop-filter md:px-10">
      <div className="flex w-full max-w-screen-2xl justify-between">
        <a href="/#" className="flex items-center">
          <div className="max-h-20 -mt-8">
            <Logo />
          </div>
        </a>
        <div className="mt-8 pl-10">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
