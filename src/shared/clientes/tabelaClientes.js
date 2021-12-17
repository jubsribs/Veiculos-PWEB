import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService from "../../services/apiService.js"


function TabelaClientes(actions) {
    const dir = actions['direction']
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        getClientes()
    }, []);

    const getClientes = () => {
        apiService.verClientes()
            .then(response => {
                setClientes(response)
            }).catch(e => {
                console.log(e)
            })
    }

    switch (dir) {
        case "novos_clientes":
            return (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Nome</th>
                                <th>CNH</th>
                                <th>RG</th>
                                <th>CPF</th>
                                <th>Aprovar Cadastro</th>
                                <th>Rejeitar Cadastro</th>
                            </tr>

                            {clientes.length > 0 &&
                                clientes.map((cliente, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{cliente.nome}</td>
                                            <td>{cliente.cnh}</td>
                                            <td>{cliente.rg}</td>
                                            <td>{cliente.cpf}</td>
                                            <td><button onClick={apiService.aprovarRegistro(cliente.id, true)}> Aprovar </button></td>
                                            <td><button onClick={apiService.aprovarRegistro(cliente.id, false)}> Reprovar </button></td>
                                        </tr>
                                    )

                                })}
                        </tbody>
                    </table>
                </div>
            )

        default:
            //buildar tabela para cliente devolver veiculo
            return (
                <div></div>
            )
    }
}

export default TabelaClientes