import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div className='flex flex-col items-center'>
      <button
        onClick={onClick}
        className='
        pt-2 pb-2 pr-5 pl-5
        bg-linear-to-t from-sky-500 to-indigo-500 cursor-pointer rounded-md shadow-lg 
        hover:bg-linear-to-bl hover:from-violet-500'
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
