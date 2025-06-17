import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode
}

const WithoutAuth: React.FC<Props> = ({children}) => {
    const token = localStorage.getItem('token');

    if (token) {
        return <Navigate to='/analyzer' />
    }

    return children
}   

export default WithoutAuth