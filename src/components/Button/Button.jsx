import React from "react";

const base =
  'rounded-full px-6 py-3 text-[1rem] text-center font-medium cursor-pointer transition-colors duration-200';
const variants = {
  primary: `${base} bg-[#27346a] text-white border-none`,
  outline: `${base} bg-white text-[#27346a] border border-[#e0e3eb] hover:bg-[#f5f6fa]`,
};

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
export const CustomButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'cursor-pointer font-semibold transition-all duration-300 rounded-xl flex items-center justify-center';
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white px-8 py-4',
    secondary: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4',
    ghost: 'text-orange-500 hover:text-orange-600 bg-transparent p-0',
  };
  return (
      <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
  );
};