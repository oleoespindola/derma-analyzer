import React from 'react';

interface InterfaceProps {
  placeholder: string;
  type: string;
}

const Button: React.FC<InterfaceProps> = ({ placeholder, type }) => {
  return (
    <div className='flex flex-col items-stretch'>
      <input
        className='bg-[var(--color-soft-gray)] p-2 rounded-sm inset-shadow-sm'
        placeholder={placeholder}
        type={type}
      >
      </input>
    </div>
  );
};

export default Button;
