import { useState } from "react"
import CropImg from "../features/analyzer/CropImg"

const ImgInput = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImageSrc(url)
    }
  }

  return (
    <>
      {imageSrc &&  <CropImg imageSrc={imageSrc} onCancel={() => setImageSrc(null)} />}
      <div className='flex flex-col items-center'>
        <div className='relative inline-block'>
          <div className='
            p-2
            bg-gradient-to-t from-sky-500 to-indigo-500 cursor-pointer 
            hover:bg-gradient-to-bl hover:from-violet-500
            rounded-full shadow-lg'
          >
            <img src="./src/assets/photo_camera.svg" alt="Enviar Imagem" />
            <input
              type="file"
              accept='image/*'
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer rounded-full"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ImgInput
