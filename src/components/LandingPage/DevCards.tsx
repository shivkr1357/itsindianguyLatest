"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";




const devCards = [
   {
      title: "Web Frontend",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721725.png",
      link: "/web-development",
   },
   {
      title: "Mobile Apps",
      image: "https://cdn-icons-png.flaticon.com/512/2586/2586488.png",
      link: "/mobile-development",
   },
   {
      title: "Backend",
      image: "https://cdn-icons-png.flaticon.com/512/8099/8099100.png",
      link: "/backend-development",
   },
   {
      title: "DevOps",
      image: "https://cdn-icons-png.flaticon.com/512/9433/9433667.png",
      link: "/devops",
   },
   {
      title: "Cloud",
      image: "https://cdn-icons-png.flaticon.com/512/4116/4116139.png",
      link: "/cloud",
   },
   {
      title: "Database",
      image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      link: "/database",
   },
   {
      title: "UI/UX",
      image: "https://cdn-icons-png.flaticon.com/512/5278/5278663.png",
      link: "/ui-ux",
   },
   {
      title: "AI/ML",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
      link: "/ai-ml",
   },
   {
      title: "Blockchain",
      image: "https://cdn-icons-png.flaticon.com/512/2091/2091665.png",
      link: "/blockchain",
   },
   {
      title: "Security",
      image: "https://cdn-icons-png.flaticon.com/512/2716/2716652.png",
      link: "/security",
   },
];

const DevCards = () => {
  
  

   return (
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-6xl mx-auto px-4">
         {devCards.map((card, index) => (
            <Link
               href={card.link}
               key={index}
               className="group block bg-white dark:bg-neutral-800 rounded-lg shadow-sm overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-md"
            >
               <div className="aspect-square relative p-2 h-[60px] sm:h-[80px]">
                  <Image
                     src={card.image}
                     alt={card.title}
                     fill
                     className="object-contain p-1"
                  />
               </div>
               <div className="p-2 bg-neutral-50 dark:bg-neutral-700">
                  <h3 className="text-center text-xs font-medium text-neutral-800 dark:text-neutral-100">
                     {card.title}
                  </h3>
               </div>
            </Link>
         ))}
      </div>
   );
};

export default DevCards;
