import { useState } from "react";
import Button from "../../components/Button"
import Input from "../../components/Input"
import api from "../../services/api";
import { useNavigate } from "react-router";
import Warning from "../../components/warning";

interface UserRespose {
    name: string;
    email: string;
    sub: string;
    access_token: string;
    token_type: string;
}

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [sync, setSync] = useState(false)

    const [message, setMessage] = useState<string | null>(null)
    const navigate = useNavigate()

    const handleAuth = async () => {
        setSync(true)
        try {
            const response = await api.post<UserRespose>('/users/auth', {
                email: email,
                password: password
            })

            navigate('/analyzer');

            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('sub', response.data.sub);

        } catch (error: any) {
            if (error.response) {
                setMessage(String(error.response.data.detail))
            } else setMessage('Bad Request • ' + String(error))
        }
        setSync(false)
    }

    return (
        <div className="flex flex-col gap-y-5 items-stretch">
            {message && <Warning text={message}></Warning>}

            <Input placeholder={'Email'} type="email" value={email} onChange={e => setEmail(e.target.value)}></Input>
            <Input placeholder={'Senha'} type="password" value={password} onChange={e => setPassword(e.target.value)}></Input>
            <Button text="Entrar" onClick={handleAuth} sync={sync}></Button>
        </div>
    )
}

export default Login