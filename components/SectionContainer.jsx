import React from 'react';

export default function SectionContainer({ children }) {
  return <div className="md:h-screen max-w-screen overflow-hidden dark:bg-gray-900">{children}</div>;
}
