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