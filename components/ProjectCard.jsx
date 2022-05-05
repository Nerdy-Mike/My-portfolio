/* eslint-disable max-len */
import React, { useState } from 'react';

function ProjectCard({ project }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <button
      type="button"
      className="max-w-sm rounded-lg overflow-hidden shadow-lg transition bg-white dark:bg-gray-700 hover:shadow-md hover:translate-y-0.5 cursor-pointer"
      onClick={() => { openInNewTab(project.url); }}
    >

      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{project.name}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {project.desc}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {project.tags.map((tag, id) => (
          <span id={`${project.name}${id}`} className="inline-block bg-gray-200 dark:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
        ))}
      </div>
    </button>
  );
}

export default ProjectCard;
