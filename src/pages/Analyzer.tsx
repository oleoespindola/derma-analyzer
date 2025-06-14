import ImgButton from "../components/ImgInput";

const Analyzer = () => {
    return (
        <div className="flex h-full w-full">
            <div className="flex h-full w-2/12 bg-[var(--color-dark-gray)] p-3">
                <p>Olá fulano</p>
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