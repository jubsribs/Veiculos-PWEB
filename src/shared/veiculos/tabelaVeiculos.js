import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService from "../../services/apiService.js"


// recebe um objeto que faz mil coisas 
function TabelaAlugarVeiculos(actions) {

    const dir = actions['direction']
    const [veiculos, setVeiculos] = useState([])
    const [reservas, setReserva] = useState([])
    const [currentIndex, setCurrentIndex] = useState(-1)

    useEffect(() => {
        switch (dir) {
            //para cliente pegar veiculo
            case "reservar":
                getVeiculosDisponiveis()
                break;
            // para cliente devolver veiculo
            case "devolver":
                getMeusAlugados(actions['idCliente'])
                break;
            // para fornecedor ver veiculos fornecidos
            case "verVeiculosFornecedor":
                getFornecedorVeiculos(actions['idFornecedor'])
                break;
            // para funcionario ver lista de pedidos pendentes para fazer a locacao
            case "verVeiculosPendentes":
                getVeiculosPendentes(actions['idEmpresa'])
                break;
            // para funcionario ver lista de veiculos aguardando confirmacao para devolucao ou manutencao
            case "verVeiculosDevolucao":
                getVeiculosDevolucao(actions['idEmpresa'])
                break;
            // para funcionario ver lista de veiculos da empresa
            case "verVeiculosEmpresa":
                getVeiculosEmpresa(actions['idEmpresa'])
                break;
            default:
                console.log('aaaa')
                break;
        }
    }, []);

    const getVeiculosDisponiveis = () => {
        apiService.VerVeiculosDisponiveis()
            .then(response => {
                setVeiculos(response)
            }).catch(e => {
                console.log(e)
            })
    }

    const getMeusAlugados = (idCliente) => {
        apiService.getReservadoPorCliente(idCliente)
            .then(response => {
                console.log(response.data)
                setVeiculos(null)
                setVeiculos(response.data)
            }).catch(e => {
                console.log(e)
            })
    }

    const getFornecedorVeiculos = (idFornecedor) => {
        apiService.getVeiculosPorEmpresa(idFornecedor)
            .then(response => {
                console.log(response.data)
                setVeiculos(null)
                setVeiculos(response.data)
            }).catch(e => {
                console.log(e)
            })
    }

    const getVeiculosPendentes = (idEmpresa) => {
        apiService.getVeiculosPorEmpresa(idEmpresa)
            .then(response => {
                // console.log(response.data)
                // let pendentes = response.data.filter((pendentes) => { pendentes['status'] == 'pendente' })

                // setVeiculos(null)
                // setVeiculos(pendentes)
            }).catch(e => {
                console.log(e)
            })
    }

    const getVeiculosDevolucao = (idEmpresa) => {
        apiService.getVeiculosPorEmpresa(idEmpresa)
            .then(response => {
                // console.log(response.data)
                // let veiculosDevolucao = response.data.filter((pendentes) => { pendentes['status'] == 'devolucao' })

                // setVeiculos(null)
                // setVeiculos(veiculosDevolucao)
            }).catch(e => {
                console.log(e)
            })
    }

    const getVeiculosEmpresa = (idEmpresa) => {
        apiService.getVeiculosPorEmpresa(idEmpresa)
            .then(response => {
                console.log(response.data)
                setVeiculos(null)
                setVeiculos(response.data)
            }).catch(e => {
                console.log(e)
            })
    }

    const reservarVeiculo = (veiculo) => {
        apiService.reservarVeiculo(veiculo).then(response => {

        }).catch(e => { })
    }

    const entregarVeiculo = (veiculo) => {
        apiService.entregarVeiculo(veiculo).then(response => {

        }).catch(e => { })
    }

    const aprovarReserva = (reserva) => {
        apiService.aprovarReserva(reserva.id, true)
            .then(response => {
                if (response.status == 200) {
                    console.log('Sucesso na solicitacao')
                } else console.log('Falha na solicitacao')
            }).catch(e => { console.log('Erro interno') })
    }

    const negarReserva = (reserva) => {
        apiService.aprovarReserva(reserva.id, false)
            .then(response => {
                if (response.status == 200) {
                    console.log('Sucesso na solicitacao')
                } else console.log('Falha na solicitacao')
            }).catch(e => { console.log('Erro interno') })
    }

    const aprovarEntrega = (veiculo) => {
        apiService.entregarVeiculo(veiculo).then(
            response => {
                if (response.status == 200) {
                    console.log('Sucesso na solicitacao')
                } else console.log('Falha na solicitacao')
            }).catch(e => { console.log('Erro interno') })
    }

    const enviarParaManutencao = (veiculo) => {
        apiService.EnviarParaManutencao(veiculo.id)
            .then(response => {
                if (response.status == 200) {
                    console.log('Sucesso na solicitacao')
                } else console.log('Falha na solicitacao')
            }).catch(e => { console.log('Erro interno') })
    }

    switch (dir) {
        case "funcionario_emprestimo_reserva":
            // buildar tabela para funcionario aprovar emprestimo
            return (
                <table>
                    <tbody>
                        <tr>
                            <th>Veiculo</th>
                            <th>Valor</th>
                            <th>Cliente</th>
                            <th>Aprovar reserva</th>
                            <th>Reprovar reserva</th>
                        </tr>

                        {reservas.length > 0 &&
                            reservas.map((reserva, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{reserva.veiculo.placa}</td>
                                        <td>{reserva.valor}</td>
                                        <td>{reserva.cliente.nome}</td>
                                        <td><button onClick={aprovarReserva(reserva)}> Aprovar </button></td>
                                        <td><button onClick={negarReserva(reserva)}> Reprovar </button></td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            )

        case "funcionario_emprestimo_entrega":
            // buildar para o funcionario ver os veiculos que sao devolvidos 
            // e que vao ser enviados para manutencao
            return (
                <table>
                    <tbody>
                        <tr>
                            <th>Veiculo</th>
                            <th>Valor Total</th>
                            <th>Cliente</th>
                            <th>Aprovar devolucao</th>
                            <th>Enviar para manutenção</th>
                        </tr>

                        {reservas.length > 0 &&
                            reservas.map((reserva, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{reserva.veiculo.placa}</td>
                                        <td>{reserva.valor}</td>
                                        <td>{reserva.cliente.nome}</td>
                                        <td><button onClick={aprovarEntrega(reserva.veiculo)}> Aprovar </button></td>
                                        <td><button onClick={enviarParaManutencao(reserva)}> Reprovar </button></td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            )

        case "reservar":
            // buildar tabela para cliente alugar veiculo
            return (
                <div>
                    <h1> Veiculos disponiveis para reserva </h1>
                    <table>


                        <tbody>
                            <tr>
                                <th>Veiculo</th>
                                <th>Disponibilidade</th>
                                <th>Valor Diário</th>
                                <th>Categoria</th>
                                <th>Alugar</th>
                            </tr>

                            {veiculos.length > 0 &&
                                veiculos.map((veiculo, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{veiculo.veiculo}</td>
                                            <td>{veiculo.disponibilidade}</td>
                                            <td>{veiculo.valor}</td>
                                            <td>{veiculo.categoria}</td>
                                            <td><button onClick={reservarVeiculo(veiculo)}> Reservar </button></td>
                                        </tr>
                                    )

                                })}
                        </tbody>

                    </table>
                </div>
            )

        case "entregar":
            return (
                <div>
                    <h1> Seus veículos para entregar </h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>Veiculo</th>
                                <th>Valor Total</th>
                                <th>Categoria</th>
                                <th>Entregar</th>
                            </tr>

                            {veiculos.length > 0 &&
                                veiculos.map((veiculo, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{veiculo.veiculo}</td>
                                            <td>{veiculo.valor}</td>
                                            <td>{veiculo.categoria}</td>
                                            <td><button onClick={entregarVeiculo(veiculo)}> Reservar </button></td>
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

export default TabelaAlugarVeiculos