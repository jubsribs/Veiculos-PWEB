import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";


import Login from "./pages/login/login";
import CadastrarVeiculo from "./pages/adminFornecedor/cadastrarVeiculo/cadastrarVeiculo";
import GerenciarVeiculo from "./pages/adminFornecedor/gerenciarVeiculos/gerenciarVeiculos";
import AprovaLocacoes from "./pages/adminFuncionario/aprovaLocacao/aprovaLocacao";
import AprovaClientes from "./pages/adminFuncionario/aprovaCliente/aprovaCliente";
import ClientePerfil from "./pages/ClientePerfil/main/clientePerfil";
import FuncionarioPerfil from "./pages/FuncionarioPerfil/Fmain/funcionarioPerfil";
import FornecedorPerfil from "./pages/FornecedorPerfil/Frmain/fornecedorPerfil";
import Plogin from "./pages/PosLogin/plogin";
import CadastroFornecedor from "./pages/forms/FormsFornecedor/Frcadastro";
import CadastroFuncionario from "./pages/forms/FormsFuncionario/fcadastro";
import CadastroCliente from "./pages/forms/FormsCliente/cadastrocliente";
import AlugarVeiculoCliente from "./pages/adminCliente/alugarVeiculoCliente";
import DevolverVeiculoCliente from "./pages/adminCliente/devolverVeiculoClient";
import HistoricoVeiculoClientes from "./pages/adminCliente/historicoVeiculoClientes";
import CheckListDevolucao from "./pages/adminFuncionario/checklistDevolucao/checklistDevolucao";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                //rotas gerais
                <Route path="/" element={<Login />} />
                <Route path="/adminCliente" element={<ClientePerfil />} />
                <Route path="/adminFornecedor" element={<FornecedorPerfil />} />
                <Route path="/adminFuncionario" element={<FuncionarioPerfil />} />
                <Route path="/toCadastro" element={<Plogin />} />

                //rotas cadastro
                <Route path="/cadastroCliente" element={<CadastroCliente />} />
                <Route path="/cadastroFornecedor" element={<CadastroFornecedor />} />
                <Route path="/cadastroFuncionario" element={<CadastroFuncionario />} />

                //cliente rotas
                <Route path="/toAlugarVeiculo/:param" element={<AlugarVeiculoCliente />} />
                <Route path="/toDevolverVeiculo/:param" element={<DevolverVeiculoCliente />} />
                <Route path="/toHistoricoVeiculo/:param" element={<HistoricoVeiculoClientes />} />

                //fornecedor rotas
                //action para cadastrar : cadastro / update
                <Route path="/gerenciarVeiculos" element={<GerenciarVeiculo />} />

                //funcionario rotas
                <Route path="/aprovaLocacoes" element={<AprovaLocacoes />} />
                <Route path="/aprovaClientes" element={<AprovaClientes />} />
                <Route path="/cadastrarVeiculo" element={<CadastrarVeiculo />} />
                <Route path="/checklistAprovacao" element={<CheckListDevolucao />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;