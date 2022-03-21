import React, { useState } from 'react';

function ProjectCard() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition bg-white dark:bg-gray-700 hover:shadow-md hover:translate-y-0.5 cursor-pointer ">
      <img className="w-full" src="https://madewithnetworkfra.fra1.digitaloceanspaces.com/spatie-space-production/28542/conversions/storyblok-editor-2-overview.jpg" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 dark:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 dark:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 dark:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  );
}

export default ProjectCard;
