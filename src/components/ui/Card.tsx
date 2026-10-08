import React from 'react';

export const Card: React.FC<React.HTMLAttributes<HTMLElement>> = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <article className={`card ${className}`.trim()} {...props}>
      {children}
    </article>
  );
};

export default Card;