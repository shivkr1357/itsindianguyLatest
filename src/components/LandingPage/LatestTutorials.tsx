import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const tutorials = [
   {
      title: "Build a Full-Stack App with Next.js",
      category: "Web Development",
      level: "Intermediate",
      duration: "45 min",
      image: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
      link: "/tutorials/fullstack-nextjs"
   },
   {
      title: "Master TypeScript Generics",
      category: "TypeScript",
      level: "Advanced",
      duration: "30 min",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      link: "/tutorials/typescript-generics"
   },
   {
      title: "React Performance Optimization",
      category: "React",
      level: "Advanced",
      duration: "40 min",
      image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
      link: "/tutorials/react-performance"
   }
];

const LatestTutorials = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {tutorials.map((tutorial, index) => (
            <Link
               href={tutorial.link}
               key={index}
               className="group bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
               <div className="relative h-40 bg-neutral-100 dark:bg-neutral-700">
                  <Image
                     src={tutorial.image}
                     alt={tutorial.title}
                     fill
                     className="object-contain p-4"
                  />
               </div>
               <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                     <span className="text-xs px-2 py-1 bg-primary-200/10 text-primary-200 rounded">
                        {tutorial.category}
                     </span>
                     <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">
                        {tutorial.level}
                     </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-100">
                     {tutorial.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                     Duration: {tutorial.duration}
                  </p>
               </div>
            </Link>
         ))}
      </div>
   );
};

export default LatestTutorials; 