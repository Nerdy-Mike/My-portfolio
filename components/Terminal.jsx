/* eslint-disable max-len */
import React, { useState } from 'react';
import { ReactTerminal } from 'react-terminal';
import AboutMe from './Aboutme';
import Projects from './Projects';
import Contact from './Contact';

function Terminal() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const [isShowProjectsOpen, setIsShowProjectsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const setShowAboutme = () => {
    setIsAboutMeOpen(!isAboutMeOpen);
  };
  const setShowProjectsOpen = () => {
    setIsShowProjectsOpen(!isShowProjectsOpen);
  };
  const setShowContactOpen = () => {
    setIsContactOpen(!isContactOpen);
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
    help: 'I can do anything you want.',
    clear: 'I can do anything you want.',
    date: 'I can do anything you want.',
  };
  return (
    <div className="h-full pt-6 ">
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
