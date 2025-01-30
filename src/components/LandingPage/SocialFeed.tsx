import React from 'react';
import Image from 'next/image';

const socialPosts = [
   {
      platform: "Twitter",
      content: "Just launched a new tutorial on Next.js 14! Check it out 🚀",
      engagement: "2.5K likes",
      date: "2 hours ago",
      icon: "https://cdn-icons-png.flaticon.com/512/3256/3256013.png"
   },
   {
      platform: "LinkedIn",
      content: "Excited to announce our new course on React Server Components!",
      engagement: "500+ reactions",
      date: "1 day ago",
      icon: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
   },
   {
      platform: "YouTube",
      content: "New video: Building a Full-Stack App with Next.js and TypeScript",
      engagement: "10K views",
      date: "3 days ago",
      icon: "https://cdn-icons-png.flaticon.com/512/3670/3670147.png"
   }
];

const SocialFeed = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {socialPosts.map((post, index) => (
            <div 
               key={index}
               className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm"
            >
               <div className="flex items-center mb-3">
                  <div className="relative w-8 h-8 mr-3">
                     <Image
                        src={post.icon}
                        alt={post.platform}
                        fill
                        className="object-contain"
                     />
                  </div>
                  <div>
                     <h3 className="font-medium text-neutral-800 dark:text-neutral-100">
                        {post.platform}
                     </h3>
                     <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {post.date}
                     </p>
                  </div>
               </div>
               <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                  {post.content}
               </p>
               <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  {post.engagement}
               </div>
            </div>
         ))}
      </div>
   );
};

export default SocialFeed; 