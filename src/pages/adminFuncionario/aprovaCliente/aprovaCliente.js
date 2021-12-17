// lista com todos os clientes que precisam de aprovacao
// soh precisa abrir um modalzinho pra aprovar ou reprovar

import { useParams } from 'react-router-dom'
import TabelaClientes from '../../../shared/clientes/tabelaClientes'


function AprovaClientes() {
    const { action } = useParams()
    console.log('action' + action)

    //passar id do cliente
    return (
        <div>
            <h1>Aprovação de novos Clientes</h1>
            <TabelaClientes direction={action} />
        </div>
    )
}

export default AprovaClientes