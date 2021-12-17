import { useParams } from 'react-router-dom'
import TabelaAlugarVeiculos from '../../shared/veiculos/tabelaVeiculos'

function AlugarVeiculoCliente() {
    const { action } = useParams()
    return (
        <div>
            <h1>Painel do cliente</h1>
            <TabelaAlugarVeiculos direction={action} />
        </div>
    )
}


export default AlugarVeiculoCliente