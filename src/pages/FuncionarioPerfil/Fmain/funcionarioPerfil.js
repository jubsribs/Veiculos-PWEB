import fcharts from '../Fcharts/fcharts';
import './funcionarioPerfil.css';
import { Link, useNavigate, useRoutes } from 'react-router-dom';
import React, { useState, useEffect } from "react";

const FuncionarioPerfil = () => {
    return (
        <main>
            <div className="fmain__container">
                <div className="fmain__title">
                    <div className="fmain__greeting">
                        <h1> Olá </h1>
                        <p>
                            Bem Vindo ao seu painel
                        </p>
                    </div>
                </div>

                <div className="fmain__cards">
                    <div className="fcard">
                        <div className="fcard_inner">
                            Permissões de acesso
                            <span className="font-bold text-title">
                                10
                            </span>
                        </div>
                    </div>


                    <div className="fcard">
                        <div className="fcard_inner">
                            <p className="text-primary-p">
                                Permissão Locações
                            </p>
                            <span className="font-bold text-title">
                                10
                            </span>
                        </div>
                    </div>


                    <div className="fcard">
                        <div className="fcard_inner">
                            <p className="text-primary-p">
                                CheckList para Devoluções
                            </p>
                            <span className="font-bold text-title">
                                5
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/aprovaClientes">Aprovar novos cadastros</Link>
            <Link to="/aprovaLocacoes/:aprova">Aprovar Locações</Link>
            <Link to="/aprovaLocacoes/:reprova">Reprovar Locações</Link>
            <Link to="/checklistAprovacao">Aprovar/Reprovar Devoluções</Link>
            <Link to="/cadastrarVeiculo">Cadastrar Veículo</Link>

        </main >
    )
};
export default FuncionarioPerfil;