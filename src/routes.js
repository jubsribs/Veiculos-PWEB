import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";


import Login from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import AdminCliente from "./pages/adminCliente/adminCliente";
import CadastrarVeiculo from "./pages/adminFornecedor/cadastrarVeiculo/cadastrarVeiculo";
import GerenciarVeiculo from "./pages/adminFornecedor/gerenciarVeiculos/gerenciarVeiculos";
import AprovaLocacao from "./pages/adminFuncionario/aprovaLocacao/aprovaLocacao";
import AprovaCliente from "./pages/adminFuncionario/aprovaCliente/aprovaCliente";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                //rotas gerais
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />

                //cliente rotas
                <Route path="/adminCliente/:action" element={<AdminCliente />} />

                //fornecedor rotas
                //action para cadastrar : cadastro / update
                <Route path="/cadastrarVeiculo/:action" element={<CadastrarVeiculo />} />
                <Route path="/gerenciarVeiculos" element={<GerenciarVeiculo />} />

                //funcionario rotas
                <Route path="/aprovaLocacao" element={<AprovaLocacao />} />
                <Route path="/aprovaCliente" element={<AprovaCliente />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;