import type React from "react";

interface historyProps {
    imageURL: string,
    createdAt: string
    prediction: string
}

/**
 * Componente que renderiza um item do histórico de análises.
 * Ele precisa do `imageURL`, `createdAt` e `prediction` para renderizar o item do histórico corretamente.
 * 
 * @param {string} imageURL - URL da imagem enviada pelo usuário para análise.
 * @param {string} createdAt - Data e hora que a análise foi realizada.
 * @param {string} prediction - Porcentagem de chance de câncer de pele na imagem analisada.
 */
const HistoryComponent: React.FC<historyProps> = ({ imageURL, createdAt, prediction }) => {
    const textAnalysis = () => {
        const numericPrediction = Number(prediction.replace('%', '')) / 100;

        if (numericPrediction <= 0.05) {
            return <><strong>Resultado muito baixo.</strong><br/> A imagem analisada tem baixíssima chance de estar relacionada a câncer de pele. </>

        } else if (numericPrediction <= 0.2) {
            return <><strong>Resultado baixo.</strong><br/> A chance de câncer de pele é considerada baixa na imagem analisada. </>

        } else if (numericPrediction <= 0.8) {
            return <><strong>Resultado inconclusivo.</strong><br/> A imagem possui não características suficientes para análise </>

        } else {
            return <><strong>Resultado moderadamente alto.</strong><br/> Há sinais que podem indicar risco. </>
        } 
    };

    return (
        <div className="flex flex-col">
            <div className="flex gap-x-2">

                <div className="flex">
                    <div className="flex flex-col">
                        <img src={imageURL} alt="Imagem enviada pelo usuário para análise" width={120} />
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-col h-full border-r-3 rounded-full border-gray-600"></div>
                </div>

                <div className="flex">
                    <div className="flex flex-col justify-center gap-y-2">
                        <p className="font-light text-[10px]">{createdAt} 🔹 Previsão: {prediction}</p>
                        <>{textAnalysis()}</>
                        <p className="font-light text-[10px]">⚠️ Recomendamos avaliação médica imediata. Este resultado não é um diagnóstico.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HistoryComponent;