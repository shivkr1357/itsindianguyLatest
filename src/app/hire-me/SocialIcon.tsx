"use client";

import { FaUpwork, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

interface SocialIconProps {
  iconName: string;
  size?: number;
}

export default function SocialIcon({ iconName, size = 64 }: SocialIconProps) {
  switch (iconName.toLowerCase()) {
    case "upwork":
      return <FaUpwork size={size} className="text-[#6FDA44]" />;
    case "linkedin":
      return <FaLinkedin size={size} className="text-[#0077B5]" />;
    case "github":
      return (
        <FaGithub
          size={size}
          className="text-neutral-800 dark:text-neutral-100"
        />
      );
    case "x":
      return (
        <FaXTwitter
          size={size}
          className="text-neutral-800 dark:text-neutral-100"
        />
      );
    default:
      return null;
  }
}

