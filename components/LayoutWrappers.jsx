import React from 'react';
import SectionContainer from './SectionContainer';
import Footer from './Footer';
import Navbar from './NavBar';

function LayoutWrappers({ children }) {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col items-center justify-between">
        <Navbar />
        <div className="mx-4">
          <main className="">{children}</main>
        </div>
        <Footer />
      </div>
    </SectionContainer>
  );
}

export default LayoutWrappers;
