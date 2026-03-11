import { BrowserRouter, Navigate } from "react-router-dom";
import { Rotas } from "./Routes";
import type { PropsWithChildren } from "react";

export function Routes() {
    return (
        <BrowserRouter>
            <Rotas/>
        </BrowserRouter>
    )
}

export function ProtectedRoute({ children }: PropsWithChildren) {
    const hashToken = document.cookie.includes("token")

    // if(!hashToken) {
    //     return <Navigate to="/login" replace/>
    // }

    return children;
}