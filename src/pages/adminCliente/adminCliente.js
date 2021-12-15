import { useParams } from 'react-router-dom'
import TabelaAlugarVeiculos from '../../shared/veiculos/tabelaVeiculos'

function AdminCliente() {
    const { action } = useParams()
    console.log('action' + action)
    return (
        <div>
            <h1>Painel do cliente</h1>
            <TabelaAlugarVeiculos direction={action} />
        </div>
    )
}


export default AdminCliente