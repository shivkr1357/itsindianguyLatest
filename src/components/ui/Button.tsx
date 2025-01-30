import { ButtonHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: IconDefinition;
  isLoading?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  isLoading,
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-200 text-white hover:bg-primary-300 focus:ring-primary-200",
    secondary: "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 focus:ring-neutral-200 dark:bg-neutral-700 dark:text-neutral-100",
    outline: "border-2 border-primary-200 text-primary-200 hover:bg-primary-200/10 focus:ring-primary-200"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
      ) : icon ? (
        <FontAwesomeIcon icon={icon} className={`w-4 h-4 ${children ? "mr-2" : ""}`} />
      ) : null}
      {children}
    </button>
  );
};

export default Button; 