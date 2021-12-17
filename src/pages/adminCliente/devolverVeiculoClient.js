import { useParams } from 'react-router-dom'
import TabelaAlugarVeiculos from '../../shared/veiculos/tabelaVeiculos'

function DevolverVeiculoCliente() {
    const { action } = useParams()
    //passar id do cliente
    return (
        <div>
            <h1>Devolver Veículos</h1>
            <TabelaAlugarVeiculos direction={action} />
        </div>
    )
}


export default DevolverVeiculoCliente