import React from 'react';
import Image from 'next/image';

const testimonials = [
   {
      name: "Alex Johnson",
      role: "Senior Developer",
      company: "Tech Corp",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
      text: "The tutorials here helped me level up my development skills significantly. Great resource!"
   },
   {
      name: "Sarah Chen",
      role: "Frontend Engineer",
      company: "StartupX",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
      text: "Clear, concise, and practical content. I especially love the React tutorials."
   },
   {
      name: "Mike Brown",
      role: "Full Stack Developer",
      company: "DevCo",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      text: "The interview prep section is gold! Helped me land my dream job."
   }
];

const Testimonials = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {testimonials.map((testimonial, index) => (
            <div 
               key={index}
               className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm"
            >
               <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                     <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                     />
                  </div>
                  <div>
                     <h3 className="font-medium text-neutral-800 dark:text-neutral-100">
                        {testimonial.name}
                     </h3>
                     <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {testimonial.role} at {testimonial.company}
                     </p>
                  </div>
               </div>
               <p className="text-neutral-600 dark:text-neutral-300 text-sm">
               &quot;{testimonial.text}&quot;
               </p>
            </div>
         ))}
      </div>
   );
};

export default Testimonials; 