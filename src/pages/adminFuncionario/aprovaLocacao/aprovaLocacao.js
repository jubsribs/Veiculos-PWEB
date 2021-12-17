// essa classe eh responsavel por fazer a validacao da locacao, tanto o momento que o cliente vai locar quanto devolver
// ver lista de veiculos e saber se precisa aprovar ou mandar pra manutencao

import { useParams } from 'react-router-dom'
import TabelaAlugarVeiculos from '../../../shared/veiculos/tabelaVeiculos'

function AprovaLocacoes() {
    const { action } = useParams()

    return (
        <div>
            <h1>Aprovar Locação de Veículos</h1>
            <TabelaAlugarVeiculos direction={action} />
        </div>
    )
}

export default AprovaLocacoes