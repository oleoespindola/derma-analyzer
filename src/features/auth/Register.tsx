import Button from "../../components/Button"
import Input from "../../components/Input"

const Login: React.FC= () => {
    return (
        <div className="flex flex-col gap-y-5 items-stretch">
            <Input placeholder={'Nome'} type="text"></Input>
            <Input placeholder={'Email'} type="email"></Input>
            <Input placeholder={'Senha'} type="password"></Input>
            <Button text="Cadastrar"></Button>
        </div>
    )
}

export default Login