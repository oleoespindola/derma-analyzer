import React from 'react';

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className='flex flex-col items-stretch text-center'>
      <button
        onClick={onClick}
        className='flex flex-col items-center border-white border-1 p-2 rounded-sm cursor-pointer'
      >
        <div className='flex items-center gap-x-2'>
          <img src="public\google-ico.svg" alt="Ícone do Google" width='18px' />
          Entrar com o Google
        </div>
      </button>
    </div>
  );
};

export default Button;
