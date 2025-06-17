import React from 'react';

interface ButtonProps {
  sync?: boolean
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, sync }) => {
  return (
    <div className='flex flex-col items-center'>
      <button
        onClick={onClick}
        className='
        flex justify-center text-center items-center
        pt-2 pb-2 pr-5 pl-5
        bg-linear-to-t from-sky-500 to-indigo-500 cursor-pointer rounded-md hover:shadow-lg active:inset-shadow-lg
        hover:bg-linear-to-bl hover:from-violet-500'
      >
        {sync? 
        <div className='animate-spin 
        flex justify-center text-center items-center'>
          <img src="./src/assets/sync.svg" alt="sincronizando" />
        </div> : text}
      </button>
    </div>
  );
};

export default Button;
