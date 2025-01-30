import React from 'react';
import Image from 'next/image';

const ContactSection = () => {
   return (
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
         <div className="flex items-center gap-3 mb-6">
            <div className="relative w-8 h-8">
               <Image
                  src="https://cdn-icons-png.flaticon.com/512/2343/2343805.png"
                  alt="Contact"
                  fill
                  className="object-contain"
               />
            </div>
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
               Get in Touch
            </h3>
         </div>
         <form className="space-y-4">
            <div>
               <label 
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
               >
                  Name
               </label>
               <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <Image
                        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                        alt="Name"
                        width={16}
                        height={16}
                     />
                  </div>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     placeholder="John Doe"
                     className="w-full pl-10 pr-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg 
                        bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100
                        focus:ring-2 focus:ring-primary-200 focus:border-transparent
                        placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                  />
               </div>
            </div>
            <div>
               <label 
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
               >
                  Email
               </label>
               <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <Image
                        src="https://cdn-icons-png.flaticon.com/512/542/542638.png"
                        alt="Email"
                        width={16}
                        height={16}
                     />
                  </div>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="john@example.com"
                     className="w-full pl-10 pr-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg 
                        bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100
                        focus:ring-2 focus:ring-primary-200 focus:border-transparent
                        placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                  />
               </div>
            </div>
            <div>
               <label 
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
               >
                  Message
               </label>
               <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                     <Image
                        src="https://cdn-icons-png.flaticon.com/512/2593/2593491.png"
                        alt="Message"
                        width={16}
                        height={16}
                     />
                  </div>
                  <textarea
                     id="message"
                     name="message"
                     rows={4}
                     placeholder="Your message here..."
                     className="w-full pl-10 pr-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg 
                        bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100
                        focus:ring-2 focus:ring-primary-200 focus:border-transparent
                        placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                  />
               </div>
            </div>
            <button
               type="submit"
               className="w-full px-4 py-2 bg-primary-200 hover:bg-primary-300 text-white rounded-lg 
                  transition-colors flex items-center justify-center gap-2"
            >
               <Image
                  src="https://cdn-icons-png.flaticon.com/512/2983/2983788.png"
                  alt="Send"
                  width={20}
                  height={20}
               />
               Send Message
            </button>
         </form>
      </div>
   );
};

export default ContactSection; 