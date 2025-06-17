import { useNavigate } from "react-router";
import ImgButton from "../components/ImgInput";

const Analyzer = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-full w-full">
            <div className="flex flex-col justify-between h-full w-2/12 bg-[var(--color-dark-gray)] p-3">
                
                <div className="text-sm"><p>Olá, {localStorage.getItem('name')}</p></div>
                
                <div className="">
                    <a className="
                        flex w-full text-sm cursor-pointer gap-x-1 justify-center
                    "    
                    onClick={() => {
                        localStorage.clear()
                        navigate('/')
                    }}>
                        <img src="./src/assets/logout.svg" alt="Sair" width={20} />
                        sair
                    </a>
                </div>

            </div>
            <div className="flex h-full w-10/12 p-5">
                <div className="flex flex-col w-full">
                    <div className="flex w-full h-11/12"></div>
                    <div className="flex w-full h-1/12 justify-end items-center">
                        <ImgButton></ImgButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Analyzer;