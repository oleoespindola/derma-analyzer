import type React from "react";
import { useState } from "react";
import Cropper, { type Area } from "react-easy-crop";
import Button from "../../components/Button";

interface CropImgProps {
    imageSrc: string | null;
    onCancel: () => void
}

const CropImg: React.FC<CropImgProps> = ({ imageSrc, onCancel }) => {
    const [ CroppedAreaPixels, setCroppedAreaPixels ] = useState<Area | null>(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/25">
            <div className="inset-0 flex flex-col gap-y-3 items-center justify-center p-3 rounded-lg bg-[var(--color-dark-gray)]">
                <div className="relative w-md aspect-square">
                    {imageSrc && (
                        <Cropper
                            image={imageSrc}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={(_, pixels) => setCroppedAreaPixels(pixels)}
                        />
                    )}
                </div>
                <div className="flex w-full justify-end gap-x-2">
                    <button 
                        onClick={onCancel}
                        className="pt-2 pb-2 pr-5 pl-5
                            bg-[var(--color-soft-gray)] cursor-pointer rounded-md shadow-lg 
                            hover:bg-violet-500"
                    >Cancelar</button>
                    <Button text="Analisar"></Button>
                </div>
            </div>
        </div>
    )
}

export default CropImg