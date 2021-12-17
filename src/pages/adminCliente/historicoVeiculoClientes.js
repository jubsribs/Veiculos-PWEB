import { useParams } from 'react-router-dom'
import TabelaAlugarVeiculos from '../../shared/veiculos/tabelaVeiculos'

function HistoricoVeiculoClientes() {
    const { action } = useParams()
    console.log('action' + action)

    //passar id do cliente
    return (
        <div>
            <h1>Meu Histórico</h1>
            <TabelaAlugarVeiculos direction={action} />
        </div>
    )
}


export default HistoricoVeiculoClientes