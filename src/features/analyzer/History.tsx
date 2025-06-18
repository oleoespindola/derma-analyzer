import { useEffect, useState } from "react"
import api from "../../services/api"
import Warning from "../../components/warning"
import HistoryComponent from "../../components/historyComponent"
import { useNavigate } from "react-router-dom"

type HistoryItem = {
    image_url: string,
    user_id: number,
    created_at: string,
    feedback_timestamp: string,
    image_predict: number,
    id: number,
    user_feedback: string,
}

const History = () => {
    const [message, setMessage] = useState<string | null>(null)
    const [history, setHistory] = useState<HistoryItem[] | null>(null)

    const navigate = useNavigate();

    const loadHistory = async () => {
        try {
            const response = await api.get('users/history');
            setHistory(response.data);
        } catch (error: any) {
            if (error.message.status === 401) {
                localStorage.clear();
                navigate('/auth')
            } else if (error.response) {
                setMessage(String(error.response.data.detail))
            } else setMessage('Bad Request • ' + String(error))
        }
    }

    useEffect(() => {
        loadHistory();
    }, []);

    return (
        <div className="flex flex-col w-full overflow-y-auto">
            {message && <Warning text={message} />}
            {history && history.map((item) => {
                const predictionStr = (item.image_predict * 100).toFixed(2).toString() + '%';
                return (
                    <div className="mb-10 max-w-">
                        <HistoryComponent
                        key={item.id} imageURL={item.image_url.split('; ')[1]}
                        createdAt={item.created_at.slice(0, 10)}
                        prediction={predictionStr}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default History