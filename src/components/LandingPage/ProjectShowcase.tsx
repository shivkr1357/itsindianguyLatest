import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
   {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js and Stripe",
      image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
      tech: ["Next.js", "TypeScript", "Stripe"],
      link: "/projects/ecommerce"
   },
   {
      title: "Chat Application",
      description: "Real-time chat app using WebSocket and React",
      image: "https://cdn-icons-png.flaticon.com/512/2665/2665393.png",
      tech: ["React", "Socket.io", "Node.js"],
      link: "/projects/chat"
   },
   {
      title: "Task Management",
      description: "Collaborative task management system with real-time updates",
      image: "https://cdn-icons-png.flaticon.com/512/2620/2620576.png",
      tech: ["React", "Firebase", "Material-UI"],
      link: "/projects/task-manager"
   },
   {
      title: "AI Image Generator",
      description: "Generate unique images using AI and machine learning",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
      tech: ["Python", "TensorFlow", "OpenAI"],
      link: "/projects/ai-image"
   },
   {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking and analytics",
      image: "https://cdn-icons-png.flaticon.com/512/2091/2091665.png",
      tech: ["React", "Chart.js", "CoinGecko API"],
      link: "/projects/crypto"
   },
   {
      title: "Social Media App",
      description: "Full-featured social network with real-time updates",
      image: "https://cdn-icons-png.flaticon.com/512/9431/9431147.png",
      tech: ["Next.js", "GraphQL", "MongoDB"],
      link: "/projects/social"
   }
];

const ProjectShowcase = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {projects.map((project, index) => (
            <Link
               href={project.link}
               key={index}
               className="group bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
               <div className="relative h-48 bg-neutral-50 dark:bg-neutral-700">
                  <Image
                     src={project.image}
                     alt={project.title}
                     fill
                     className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  />
               </div>
               <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-100 group-hover:text-primary-200 transition-colors">
                     {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                     {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                     {project.tech.map((tech, i) => (
                        <span
                           key={i}
                           className="text-xs px-2 py-1 bg-primary-200/10 text-primary-200 rounded"
                        >
                           {tech}
                        </span>
                     ))}
                  </div>
               </div>
            </Link>
         ))}
      </div>
   );
};

export default ProjectShowcase; 