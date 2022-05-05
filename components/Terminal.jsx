/* eslint-disable max-len */
import React, { useState } from 'react';
import { ReactTerminal } from 'react-terminal';
import AboutMe from './Aboutme';
import Projects from './Projects';
import Contact from './Contact';
import Warning from './Warning';

function Terminal() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const [isShowProjectsOpen, setIsShowProjectsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  const setShowAboutme = () => {
    setIsAboutMeOpen(!isAboutMeOpen);
  };
  const setShowProjectsOpen = () => {
    setIsShowProjectsOpen(!isShowProjectsOpen);
  };
  const setShowContactOpen = () => {
    setIsContactOpen(!isContactOpen);
  };

  const handleRedirect = () => {
    setIsWarningOpen(true);
  };
  const setShowBlog = (blog) => {
    if (blog === 'blog') {
      handleRedirect();
    } else {
      return `${blog} is not available. Do you mean 'blog'?`;
    }
    return null;
  };

  const welcomeMessage = (
    <span>
      I’m not interested in great, I want to know who its Daddy is. - H.S
      <br />
    </span>
  );
  const commands = {
    whoami: () => setShowAboutme(),
    ls: () => setShowProjectsOpen(),
    contact: () => setShowContactOpen(),
    open: (blog) => setShowBlog(blog),
    date: 'I can do anything you want.',
  };
  return (
    <div className="h-72 md:h-96 pt-2  px-8 md:pr-20">
      <Warning isOpen={isWarningOpen} setIsOpen={setIsWarningOpen} message="I will open Blog in a new tab" />
      <ReactTerminal
        commands={commands}
        theme="material-ocean"
        prompt=">"
        className=""
        welcomeMessage={welcomeMessage}
      />
      <AboutMe isAboutMeOpen={isAboutMeOpen} setShowAboutme={setShowAboutme} />
      <Projects isShowProjectsOpen={isShowProjectsOpen} setIsShowProjectsOpen={setIsShowProjectsOpen} />
      <Contact isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />
    </div>
  );
}

export default Terminal;
