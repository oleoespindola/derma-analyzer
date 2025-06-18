const GitHub = () => {
    return (
        <div className="flex flex-col justify-center items-center text-xs">
            <div className="flex gap-x-2 justify-center">
            <img src="/gihub.png" alt="Logo do GitHub" width={15} />
                <a className="hover:text-violet-500 cursor-pointer" href="https://github.com/oleoespindola/derma-analyzer" target="blank">Repositório</a>
                <p> • </p>
                <a className="hover:text-violet-500 cursor-pointer" href="https://github.com/oleoespindola/derma-analyzer-api" target="blank">API</a>
            </div>
        </div>
    )
}

export default GitHub