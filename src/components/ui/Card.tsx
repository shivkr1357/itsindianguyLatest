interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`
      bg-white dark:bg-neutral-800 
      rounded-lg shadow-lg 
      overflow-hidden 
      transform transition-all 
      hover:shadow-xl
      ${className}
    `}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`p-6 border-b border-neutral-200 dark:border-neutral-700 ${className}`}>
      {children}
    </div>
  );
};

export const CardBody = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`p-6 border-t border-neutral-200 dark:border-neutral-700 ${className}`}>
      {children}
    </div>
  );
};

export default Card; 