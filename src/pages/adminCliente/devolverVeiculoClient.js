import { useParams } from 'react-router-dom'
import TabelaAlugarVeiculos from '../../shared/veiculos/tabelaVeiculos'

function DevolverVeiculoCliente() {
    const { action } = useParams()
    const requestParam = 'devolver'
    const userId = action['idCliente']
    const params = { requestParam, userId }

    //passar id do cliente
    return (
        <div>
            <h1>Devolver Veículos</h1>
            <TabelaAlugarVeiculos direction={params} />
        </div>
    )
}


export default DevolverVeiculoCliente