import { useParams } from 'react-router-dom'
import TabelaAlugarVeiculos from '../../shared/veiculos/tabelaVeiculos'

function HistoricoVeiculoClientes() {
    // esperando receber um id do cliente
    const { action } = useParams()
    const requestParam = 'historico'
    const userId = action['idCliente']
    const params = { requestParam, userId }

    //passar id do cliente
    return (
        <div>
            <h1>Meu Histórico</h1>
            <TabelaAlugarVeiculos direction={params} />
        </div>
    )
}


export default HistoricoVeiculoClientes