import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface SocialIcon {
   color: string;
   href: string;
   icon: IconDefinition;
}

export const imageLinksInterview = [
   {
      src: "/interview/javascript.png",
      label: "JavaScript",
      link: `/interview-qa/javascript`,
   },
   {
      src: "/interview/typescript.png",
      label: "TypeScript",
      link: `/interview-qa/typescript`,
   },
   {
      src: "/interview/react.png",
      label: "React",
      link: `/interview-qa/react`,
   },
   {
      src: "/interview/next.png",
      label: "Next.js",
      link: `/interview-qa/next`,
   },
   {
      src: "/interview/node.png",
      label: "Node.js",
      link: `/interview-qa/node`,
   },
   {
      src: "/interview/nest.png",
      label: "NestJS",
      link: `/interview-qa/nest`,
   },
   {
      src: "/interview/python.png",
      label: "Python",
      link: `/interview-qa/python`,
   },
   {
      src: "/interview/cpp.png",
      label: "CPP",
      link: `/interview-qa/cpp`,
   },
];

export const socialIcons: SocialIcon[] = [
   {
      color: "#1877F2",
      href: "https://facebook.com/itsindianguy",
      icon: faFacebook,
   },
   {
      color: "#1DA1F2",
      href: "https://twitter.com/itsindianguy",
      icon: faTwitter,
   },
   {
      color: "rgb(88,81,216)",
      href: "https://instagram.com/itsindianguy",
      icon: faInstagram,
   },
   {
      color: "#0077B5",
      href: "https://www.linkedin.com/in/shiv-shankar-prasad-03b0a715b/",
      icon: faLinkedin,
   },
   {
      color: "#FF0000",
      href: "https://www.youtube.com/@shivshankarprasad3427",
      icon: faYoutube,
   },
];
