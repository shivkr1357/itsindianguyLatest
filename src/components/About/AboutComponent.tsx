import Image from "next/image";
import React from "react";

const teamMembers = [
   {
      name: "Shiv Shankar Prasad",
      role: "Founder & CEO",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      description:
         "Shiv is a tech enthusiast with over 4 years of experience in Software development and Mobile Development",
   },
   // {
   //    name: "Jane Smith",
   //    role: "Lead Developer",
   //    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
   //    description:
   //       "Jane is a full-stack developer who loves to create beautiful and functional web applications.",
   // },
   // {
   //    name: "Bob Johnson",
   //    role: "Content Writer",
   //    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
   //    description:
   //       "Bob is passionate about writing engaging and informative tech content.",
   // },
];

const AboutComponent = () => {
   return (
      <main className="py-6 text-neutral-800 dark:text-neutral-200">
         <div className="container mx-auto px-4 max-w-5xl">
            <h1 className="text-2xl font-bold text-center mb-4">
               About Us
            </h1>
            <p className="text-center mb-6 text-sm sm:text-base max-w-2xl mx-auto">
               Welcome to ItsIndianGuy! We are a team of tech enthusiasts
               dedicated to providing the latest news, tutorials, and
               entertainment in the tech world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               {teamMembers.map((member, index) => (
                  <div 
                     key={index} 
                     className="w-full max-w-sm flex-shrink-0 sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)]"
                  >
                     <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-4">
                           <div className="flex flex-col items-center">
                              <div className="relative w-24 h-24 mb-3">
                                 <Image
                                    src={member.image}
                                    alt={member.name}
                                    className="rounded-full object-cover"
                                    width={100}
                                    height={100}   
                                 />
                              </div>
                              <h2 className="text-lg font-medium mb-1">
                                 {member.name}
                              </h2>
                              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
                                 {member.role}
                              </p>
                              <p className="text-center text-sm">
                                 {member.description}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </main>
   );
};

export default AboutComponent;
