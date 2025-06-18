import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cropper, { type Area } from "react-easy-crop";
import Button from "../../components/Button";
import Warning from "../../components/warning";
import api from "../../services/api";

interface CropImgProps {
    imageSrc: string | null;
    onCancel: () => void
}

async function cropedImage(
    imageSrc: string,
    croppedAreaPixels: Area
): Promise<Blob> {
    const image = new Image()
    image.src = imageSrc

    const canvas = document.createElement('canvas');
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;
    const ctx = canvas.getContext('2d');

    if (!ctx) throw new Error('Failed to get 2D context');

    ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
    );

    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            if (!blob) return;
            resolve(blob);
        }, 'image/jpeg', 1);
    })

}

const CropImg: React.FC<CropImgProps> = ({ imageSrc, onCancel }) => {
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const [sync, setSync] = useState(false)
    const [message, setMessage] = useState<string | null>(null)

    const navigate = useNavigate();

    const handlePrediction = async () => {
        setSync(true)
        try {

            const blob = await cropedImage(imageSrc!, croppedAreaPixels!);
            const file = new File([blob], 'cut-image.jpeg', { type: 'image/jpeg' });
            const formData = new FormData();
            formData.append('file', file);

            const response = await api.post('/users/predict', formData)
            navigate('/analyzer', { replace: true });
            window.location.reload();

        } catch (error: any) {
            if (error.response.status === 401) {
                localStorage.clear();
                navigate('/auth', { replace: true });
                window.location.reload();
            } else if (error.response) {
                setMessage(String(error.response.data.detail))
            } else setMessage('Bad Request • ' + String(error))
        }
        setSync(false)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/25">
            <div className="inset-0 flex flex-col gap-y-3 items-center justify-center p-3 rounded-lg bg-[var(--color-dark-gray)]">
            {message && <Warning text={message}></Warning>}
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
                    <Button text="Analisar" sync={sync} onClick={handlePrediction}></Button>
                </div>
            </div>
        </div>
    )
}

export default CropImg