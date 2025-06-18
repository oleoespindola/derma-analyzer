interface WarningPropos {
    text: string
}

const Warning: React.FC<WarningPropos> = ({ text }) => {
    return (
        <div className="
        mt-3 p-2 gap-x-2
        flex justify-center items-center w-full 
        border-1 border-indigo-500
        text-indigo-600
        rounded-md animate-bounce
        ">
            <img className="" src="./src/assets/warning.svg" alt="" />
            {text}
        </div>
    )
}

export default Warning