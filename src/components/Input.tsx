import React from 'react';

interface InterfaceProps {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Button: React.FC<InterfaceProps> = ({ placeholder, type, value, onChange }) => {
  return (
    <div className='flex flex-col items-stretch'>
      <input
        className='bg-[var(--color-soft-gray)] p-2 rounded-sm inset-shadow-sm'
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      >
      </input>
    </div>
  );
};

export default Button;
