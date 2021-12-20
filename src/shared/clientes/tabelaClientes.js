import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../services/apiService.js"


function TabelaClientes(actions) {
    const navigate = useNavigate()
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

    const aprovarClientes = (clienteId, aprovado) => {
        apiService.aprovarRegistro(clienteId, aprovado)
            .then(() => {
                alert('Sucesso')
                navigate('/adminFuncionario', { replace: true })
            })
            .catch(_ => alert('Falha'))
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
                                            <td><button onClick={aprovarClientes(cliente.id, true)}> Aprovar </button></td>
                                            <td><button onClick={aprovarClientes(cliente.id, false)}> Reprovar </button></td>
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