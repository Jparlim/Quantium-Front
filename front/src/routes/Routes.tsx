import { Routes, Route } from "react-router-dom";

import { CreateCount } from "../initPages/createCount/index";
import { TokenSend } from "../initPages/tokenSend";
import { Login } from "../initPages/loginCount";
import { Home } from "../pages/home";
import { ProtectedRoute } from ".";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={
                <ProtectedRoute>
                    <CreateCount/>
                </ProtectedRoute>
            }/>
            <Route path="/login" element={
                <ProtectedRoute>
                    <Login/>
                </ProtectedRoute>
            }/>
            <Route path="/token" element={
                <ProtectedRoute>
                    <TokenSend/>
                </ProtectedRoute>
            }/>
            <Route path="/home" element={
                <ProtectedRoute>
                    <Home/>
                </ProtectedRoute>
            }/>
        </Routes>
    )
}