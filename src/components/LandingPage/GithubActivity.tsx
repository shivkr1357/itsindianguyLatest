import React from 'react';
import Image from 'next/image';

const contributions = [
   {
      type: "Commit",
      repo: "next-blog",
      message: "Add dark mode support",
      date: "2 hours ago",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
   },
   {
      type: "Pull Request",
      repo: "react-components",
      message: "New component library features",
      date: "1 day ago",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
   },
   {
      type: "Issue",
      repo: "typescript-utils",
      message: "Bug fix in utility functions",
      date: "3 days ago",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111420.png"
   }
];

const GithubActivity = () => {
   return (
      <div className="max-w-3xl mx-auto">
         <div className="space-y-4">
            {contributions.map((item, index) => (
               <div 
                  key={index}
                  className="flex items-center bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm"
               >
                  <div className="relative w-10 h-10 mr-4">
                     <Image
                        src={item.icon}
                        alt={item.type}
                        fill
                        className="object-contain"
                     />
                  </div>
                  <div className="flex-1">
                     <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">
                           {item.repo}
                        </h3>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
                           {item.date}
                        </span>
                     </div>
                     <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        {item.message}
                     </p>
                  </div>
                  <span className="ml-4 text-xs px-2 py-1 bg-primary-200/10 text-primary-200 rounded">
                     {item.type}
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default GithubActivity; 