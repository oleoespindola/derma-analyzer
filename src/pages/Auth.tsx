import { useState } from "react";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import Link from "../components/Link";
import GoogleButton from "../components/GoogleButton";

const Auth: React.FC = () => {
    const [isLogin, setLogin] = useState(true);

    const toggleForm = () => {
        setLogin((prev) => !prev);
    };

    return (
        <div className="flex justify-center h-full w-full">
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="flex flex-col gap-y-5 w-3/12 bg-[var(--color-dark-gray)] p-8 rounded-md">
                    {isLogin ? <Login /> : <Register />}

                    <Link
                        onClick={toggleForm}
                        text={isLogin ? "Não tem uma conta? Cadastre-se" : "Já possui uma conta? Entrar"}
                    >
                    </Link>

                    <div className="border-[var(--color-soft-gray)] border-b-1"></div>

                    <GoogleButton></GoogleButton>
                </div>
            </div>
        </div>
    )
}

export default Auth