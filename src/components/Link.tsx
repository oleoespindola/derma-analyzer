import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Link: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <a
        onClick={onClick}
        className='
        text-indigo-500 cursor-pointer
        hover:text-violet-500'
      >
        {text}
      </a>
    </div>
  );
};

export default Link;
