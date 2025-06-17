import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode
}

const WithAuth: React.FC<Props> = ({children}) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to='/auth' />
    }

    return children
}   

export default WithAuth