const GitHub = () => {
    return (
        <div className="flex flex-col gap-y-1 items-center text-xs">
            <img src="/gihub.png" alt="Logo do GitHub" width={25} />
            <div className="flex gap-x-2">
                <a className="hover:text-violet-500 cursor-pointer" href="https://github.com/oleoespindola/derma-analyzer" target="blank">Repo</a>
                <p> • </p>
                <a className="hover:text-violet-500 cursor-pointer" href="https://github.com/oleoespindola/derma-analyzer-api" target="blank">API</a>
            </div>
        </div>
    )
}

export default GitHub