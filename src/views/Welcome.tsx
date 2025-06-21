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
      <div className="flex flex-col h-full w-full">
        <div className="flex h-2/12 w-full justify-center items-center">
          <GitHub></GitHub>
        </div>
        <div className="p-2 flex w-full h-full justify-center">
          <div className="flex flex-col w-full h-full gap-y-5 text-center justify-center md:justify-start lg:justify-start md:mt-10 lg:mt-10 text-base">
            <h1 className="text-2xl">Bem Vindo!</h1>
            <div className="flex w-0 md:w-full lg:w-full justify-center"><img src="./undraw_medicine.svg" alt="Ilustração de profissionais da saúde" width={260} /></div>
            <p className="">Este sistema utiliza inteligência artificial para auxiliar na análise de imagens de pele, com foco em possíveis sinais de câncer. </p>
            <p className="">⚠️ Atenção: os resultados apresentados não substituem uma avaliação médica profissional. <strong>Este projeto é experimental.</strong></p>
            <Button text="Começar" onClick={hadleStart}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;