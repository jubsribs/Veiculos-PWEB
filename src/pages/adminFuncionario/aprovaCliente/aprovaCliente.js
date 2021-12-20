// lista com todos os clientes que precisam de aprovacao
// soh precisa abrir um modalzinho pra aprovar ou reprovar

import TabelaClientes from '../../../shared/clientes/tabelaClientes'


function AprovaClientes() {
    let action = { 'requestParam': 'novos_clientes' }

    return (

        <div>
            <h1>Aprovação de novos Clientes</h1>
            <TabelaClientes direction={action} />
        </div>
    )
}

export default AprovaClientes