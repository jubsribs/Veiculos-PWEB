import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8085'
})

const registro = (path, data) => {
    return api.post(path, data)
}

const login = async (data) => {
    if (data['email'] == 'funcionario@email.com') {
        return {
            'nome': 'gonsales',
            'categoria': 'funcionario',
            'status': 200
        }
    } else if (data['email'] == 'fornecedor@email.com') {
        return {
            'nome': 'gonsales',
            'categoria': 'fornecedor',
            'status': 200
        }
    } else return {
        'nome': 'gonsales',
        'categoria': 'cliente',
        'status': 200
    }
}

/**
 * 
 * Para	efetuar	a	locação,	o	cliente	deverá ter	o	
 * seu	cadastro	no	sistema	aprovado	
 * pelos	critérios estabelecidos	pela	empresa
 */
const verClientes = nomeEmpresa => {
    return api.get(`clientes/${nomeEmpresa}`)
}

const aprovarRegistro = (idCliente, aprovado) => {
    return api.post('/aprovar', {
        'id': idCliente,
        'aprovado': aprovado
    })
}

const aprovarReserva = (idReserva, status) => {
    return api.post('/aprovarReserva', { 'id': idReserva, 'status': status })
}

/**
 *  * A	locação será
 * ́ efetuada	apenas	se	o	funcionário
 * possuir	as	permissões de	acesso	ao	sistema.
 */
const mostrarReservasPreAprovadas = nomeEmpresa => {
    return api.get(`/reservasPreAprovadas/${nomeEmpresa}`)
}

const mostrarTiposSeguro = nomeEmpresa => {
    return api.get(`/seguros/${nomeEmpresa}`)
}

/**	 
 * Para	 realizar	 reservas,	 o	
 * cliente	deverá fazer	seu	cadastro,	
 * selecionar	as	opções de	reserva,	tipo	de	seguro	
 * e	período de	locação.
 */
const reservarVeiculo = (path, data) => {
    return api.post('/reservar', data)
}

/**
 * para	realizar	a	devolução do	veiculo,	o	responsável 
 * deverá entregá-lo	nas	mesmas condições de	recebimento,	que	serão
 * avaliadas	 por	 uma	 vistoria	 aprovada	 pela	 
 * empresa	 com	 o	 uso	 de	 um	 checklist	fornecido	pelo	sistema
 */
const entregarVeiculo = data => {
    return api.post('/entregar', data)
}


/**
 * Se	o	veiculo não	estiver	nas	condições esperadas,	ele	será 
 * enviado	para	manutenção e	os	custos	serão acrescidos	ao	valor	
 * final	da	locação.	O	veiculo somente	será
 * disponibilizado	novamente	para	locação após o	seu	retorno	
 * à empresa	e	as	informações decorrentes	de	uso,	como
 * uilometragem,	deverão ser	atualizadas.
 */
const EnviarParaManutencao = idVeiculo => {
    return api.post('/paramanutencao', { 'id': idVeiculo })
}

const VerVeiculosDisponiveis = async _ => {
    // return [
    //     { 'nome': 'ford ka', 'disponibilidade': true, 'valor': 'R$ 100.00', 'categoria': 'Familiar' },
    // ]
    return [{ 'veiculo': 'ford fiesta', 'disponibilidade': true, 'valor': 100, 'categoria': 'passeio' }]
    return api.get('/veiculos')
}

const getReservadoPorCliente = idCliente => {
    return api.get(`reservas/cliente/${idCliente}`)
}

const getVeiculosPorEmpresa = idEmpresa => {
    return api.get(`empresa/veiculos/${idEmpresa}`)
}

const getReservas = idEmpresa => {
    return api.get(`reservas/cliente/${idEmpresa}`)
}

const verLocacoes = nomeEmpresa => {
    return api.get(`locacoes/${nomeEmpresa}`)
}

const verReservas = nomeEmpresa => {
    return api.get(`reservas/${nomeEmpresa}`)
}

const verVeiculosNaManutencao = nomeEmpresa => {
    return api.get(`manutencao_veiculos/${nomeEmpresa}`)
}

const verFuncionarios = nomeEmpresa => {
    return api.get(`funcionarios/${nomeEmpresa}`)
}

const pagarFuncionario = (idFuncionario, salario) => {
    return api.post(`pagar_funcionario/${idFuncionario}`, {
        'pagamento': salario
    })
}

const documentosLocacao = (tipo_documento, data) => {
    return api.get(`doc_locacao/${tipo_documento}`)
}

export default {
    registro,
    login,
    mostrarTiposSeguro,
    VerVeiculosDisponiveis,
    reservarVeiculo,
    getReservadoPorCliente,
    getVeiculosPorEmpresa,
    getReservas,
    verClientes,
    mostrarReservasPreAprovadas,
    aprovarRegistro,
    entregarVeiculo,
    EnviarParaManutencao,
    aprovarReserva
}

