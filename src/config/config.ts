import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FC } from "react";

export interface SocialIcon {
   color: string;
   href: string;
   icon: FC; // Function component type
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
      icon: FacebookIcon,
   },
   {
      color: "#1DA1F2",
      href: "https://twitter.com/itsindianguy",
      icon: TwitterIcon,
   },
   {
      color: "rgb(88,81,216)",
      href: "https://instagram.com/itsindianguy",
      icon: InstagramIcon,
   },
   {
      color: "#0077B5",
      href: "https://www.linkedin.com/in/shiv-shankar-prasad-03b0a715b/",
      icon: LinkedInIcon,
   },
   {
      color: "#FF0000",
      href: "https://www.youtube.com/@shivshankarprasad3427",
      icon: YouTubeIcon,
   },
];
