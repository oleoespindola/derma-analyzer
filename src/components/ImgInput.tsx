import React from 'react';

interface ButtonProps {
  onClick?: () => void;
}

const ImgInput: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative inline-block'>
        <div onClick={onClick} className='
          p-2
          bg-linear-to-t from-sky-500 to-indigo-500 cursor-pointer 
          hover:bg-linear-to-bl hover:from-violet-500
          rounded-full shadow-lg'
        >
          <img src="./src/assets/photo_camera.svg" alt="Enviar Imagem"/>
          <input type="file" accept='image/*' className="
            absolute 
            top-0 
            left-0 
            w-full 
            h-full 
            opacity-0 
            cursor-pointer
            rounded-full"/>
        </div>
      </div>
    </div>
  );
};

export default ImgInput;
