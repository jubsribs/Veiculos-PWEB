import { Link } from 'react-router-dom';
import React from 'react';
import Tabs from '../../shared/tabs/Tabs';
import './cadastro.css'

function Cadastro() {
    return (
        <div>
            <h1>Cadastro</h1>
            <Tabs>
                <div label="Cliente">

                </div>
                <div label="Funcionario">

                </div>
                <div label="Fornecedor">
                </div>
            </Tabs>
        </div>
    );
}


export default Cadastro