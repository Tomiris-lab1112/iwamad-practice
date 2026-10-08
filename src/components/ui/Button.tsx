import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      type="button" 
      className={`btn btn-${variant} ${className}`.trim()} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;