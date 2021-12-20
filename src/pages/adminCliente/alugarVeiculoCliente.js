import { useParams } from 'react-router-dom'
import TabelaAlugarVeiculos from '../../shared/veiculos/tabelaVeiculos'

function AlugarVeiculoCliente() {
    const { action } = useParams()
    const requestParam = 'reservar'
    const userId = ' '//'action['idCliente']'
    const params = { 'requestParam': requestParam, 'userId': userId }

    return (
        <div>
            <h1>Veículos disponíveis para aluguel</h1>
            <TabelaAlugarVeiculos direction={params} />
        </div>
    )
}


export default AlugarVeiculoCliente