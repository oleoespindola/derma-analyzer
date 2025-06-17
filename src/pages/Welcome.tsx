import { useNavigate } from "react-router";
import Button from "../components/Button";
import GitHub from "../components/github";

const Welcome = () => {
  const navigate = useNavigate();

  const hadleStart = () => {
    navigate('/auth')
  }

  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex flex-col h-full w-full justify-center">
        <div className="flex h-2/12 w-full justify-center items-center">
          <GitHub></GitHub>
        </div>
        <div className="flex flex-col h-5/12 w-full justify-center gap-5 text-center">
          <h1 className="text-3xl">Bem Vindo!</h1>
          <p>Nossos sistemas usam inteligências artificial para auxiliar no diagnósticos de imagem de cancer de pele.</p>
          <Button text="Começar" onClick={hadleStart}></Button>
        </div>
        <div className="flex h-5/12 w-full"></div>
      </div>
    </div>
  );
};

export default Welcome;