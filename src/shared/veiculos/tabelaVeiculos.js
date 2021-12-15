import React, { useState, useEffect } from "react";
import apiService from "../../services/apiService.js"


// recebe uma string que indica 
function TabelaAlugarVeiculos(direction) {

    const [veiculos, setVeiculos] = useState([])
    const [currentIndex, setCurrentIndex] = useState(-1)

    useEffect(() => {
        switch (direction) {
            case "reservar":
                getVeiculosDisponiveis()
                break;

            default:
                break;
        }
    }, [])

    const getVeiculosDisponiveis = () => {
        apiService.VerVeiculosDisponiveis()
            .then(response => {
                console.log(response.data)
                setVeiculos(response.data)
            }).catch(e => {
                console.log(e)
            })
    }

    switch (direction) {
        case "funcionario_emprestimo":
            // buildar tabela para funcionario aprovar emprestimo
            return (
                <table>
                    <tr>
                        <th>Veiculo</th>
                        <th>Aprovar aluguel</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                    </tr>
                </table>
            )

        case "funcionario_ver_veiculos":
            // buildar para o funcionario ver os veiculos que sao devolvidos 
            // e que vao ser enviados para manutencao
            return (
                <table>
                    <tr>
                        <th>Veiculo</th>
                        <th>Aprovar devolucao</th>
                        <th>Reprovar devolucao</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Maria Anders</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Francisco Chang</td>
                    </tr>
                </table>
            )
        case "reservar":
            // buildar tabela para cliente alugar veiculo
            return (
                <div>
                    <h1> Veiculos disponiveis para reserva </h1>
                    <table>
                        <tr>
                            <th>Veiculo</th>
                            <th>Disponibilidade</th>
                            <th>Valor</th>
                            <th>Categoria</th>
                            <th>Alugar</th>
                        </tr>

                        {veiculos &&
                            veiculos.map((veiculo, index) => {
                                <tr>
                                    <td>{veiculo.nome}</td>
                                    <td>{veiculo.disponibilidade}</td>
                                    <td>{veiculo.valor}</td>
                                    <td>{veiculo.categoria}</td>
                                    <td>botao</td>
                                </tr>
                            })}
                    </table>
                </div>
            )
            break;
        default:
            //buildar tabela para cliente devolver veiculo
            return (
                <table>
                    <tr>
                        <th>Veiculo</th>
                        <th>Alugar</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                    </tr>
                </table>
            )
            break;
    }
}

export default TabelaAlugarVeiculos