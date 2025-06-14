import { useNavigate } from "react-router";
import Button from "../components/Button";

const Welcome = () => {
  const navigate = useNavigate();

  const hadleStart = () => {
    navigate('/auth')
  }

  return (
    <div className="flex h-full w-full justify-center ">
      <div className="flex flex-col h-full w-full justify-center gap-5 text-center">
        <h1 className="text-3xl">Bem Vindo!</h1>
        <p>Nossos sistemas usam inteligências artificial para auxiliar no diagnósticos de imagem de cancer de pele.</p>
        <Button text="Começar" onClick={hadleStart}></Button>
      </div>
    </div>
  );
};

export default Welcome;