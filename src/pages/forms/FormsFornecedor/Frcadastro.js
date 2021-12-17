import { useState } from 'react';
import './Frcadastro.css';

function CadastroFornecedor() {

    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };



    return (


        <form onSubmit={handleSubmit}>
            <h1>
                Cadastrar Fornecedor
            </h1>

            <h1>
                Razão Social
            </h1>
            <input type="text" name="name" placeholder="RAZÃO SOCIAL DA MATRIZ: " onChange={handleInputChange} value={formValues.name || ''} />
            <h1>
                CNPJ
            </h1>
            <input type="text" name="cnpj" placeholder="CNPJ: " onChange={handleInputChange} value={formValues.cnpj || ''} />
            <h1>
                Endereço
            </h1>
            <input type="text" name="endereço" placeholder="ENDEREÇO" onChange={handleInputChange} value={formValues.endereço || ''} />
            <h1>
                Ciade
            </h1>
            <input type="text" name="cidade" placeholder="Cidade" onChange={handleInputChange} value={formValues.cidade || ''} />
            <h1>
                Email
            </h1>
            <input type="text" name="email" placeholder="Email" onChange={handleInputChange} value={formValues.email || ''} />
            <h1>
                Representate Legal da Empresa
            </h1>
            <input type="text" name="representante" placeholder="REPRESENTANTE LEGAL" onChange={handleInputChange} value={formValues.representante || ''} />
            <h1>
                Senha
            </h1>
            <input type="text" name="senha" placeholder="Senha" onChange={handleInputChange} value={formValues.senha || ''} />
            <h1>
                Confirmar senha
            </h1>
            <input type="text" name="confirmar_senha" placeholder="Confirmar Senha" onChange={handleInputChange} value={formValues.confirmar_senha || ''} />
            <h1>
                Bairro
            </h1>
            <input type="text" name="bairro" placeholder="BAIRRO" onChange={handleInputChange} value={formValues.bairro || ''} />

            <h1>
                Telefone
            </h1>
            <input type="text" name="telefone" placeholder="Telefone" onChange={handleInputChange} value={formValues.telefone || ''} />

            <button type="submit">
                Cadastrar
            </button>
        </form>
    )
};
export default CadastroFornecedor;
