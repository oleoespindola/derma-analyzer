interface WarningPropos {
    text: string
}

const Warning: React.FC<WarningPropos> = ({ text }) => {
    return (
        <div className="
        gap-x-2 pt-1 pb-1
        flex justify-center items-center w-full
        bg-yellow-100 
        border-2 border-yellow-700
        text-yellow-700
        rounded-md
        ">
            <img className="animate-ping" width={12} src="/warning.svg" alt="" />
            {text}
        </div>
    )
}

export default Warning