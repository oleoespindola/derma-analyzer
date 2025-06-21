import { useNavigate } from "react-router";
import ImgButton from "../components/ImgInput";
import GitHub from "../components/github";
import History from "../features/analyzer/History";

const Analyzer = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-full w-full">
            <div className="hidden md:flex lg:flex flex-col justify-between h-full w-2/12 bg-[var(--color-dark-gray)] p-3">
                
                <div className="text-sm"><p>Olá, {localStorage.getItem('name')}</p></div>
                

                <div className="flex flex-col gap-y-2">
                    <GitHub></GitHub>
                    <div className="border border-[var(--color-soft-gray)]" ></div>
                    <a className="
                        flex w-full text-sm cursor-pointer gap-x-1 justify-center
                    "    
                    onClick={() => {
                        localStorage.clear()
                        navigate('/')
                    }}>
                        <img src="/logout.svg" alt="Sair" width={20} />
                        sair
                    </a>
                </div>

            </div>
            <div className="flex h-full md:w-10/12 lg:w-10/12 p-5">
                <div className="flex flex-col w-full">
                    <div className="flex w-full h-2/12 justify-center md:hidden, lg:hidden"><img src="derma-text-ico.svg" alt=""/></div>
                    <div className="flex w-full h-9/12 md md:h-11/12 lg:h-11/12">
                        <History></History>
                    </div>
                    <div className="flex w-full h-1/12 justify-around md:justify-end lg:justify-end items-center">
                        <a className="
                            md:hidden lg:hiddenflex text-sm cursor-pointer gap-x-1 justify-start w-full flex 
                        "    
                        onClick={() => {
                            localStorage.clear()
                            navigate('/')
                        }}>
                            <img src="/logout.svg" alt="Sair" width={20} />
                        </a>
                        <ImgButton></ImgButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Analyzer;