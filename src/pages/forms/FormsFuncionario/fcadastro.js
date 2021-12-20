import { useState } from 'react';
import './fcadastro.css';
import { useNavigate } from 'react-router-dom';
import apiService from '../../../services/apiService';

function CadastroFuncionario() {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const data = formValues[name] || {}

        setFormValues({ ...formValues });
    }

    const handleSubmit = (e) => {
        apiService.registro('/', formValues).
            then(response => {
                if (response.status == 200) {
                    navigate('/login', { replace: false })
                } else alert('Falha no cadastro')
            }).catch(e => {
                alert('Falha no cadastro')
            })
    };

    return (


        <form onSubmit={handleSubmit}>
            <h1>
                Cadastrar Funcionario
            </h1>

            <h1>
                Nome
            </h1>
            <input type="text" name="name" placeholder="Nome" onChange={handleInputChange} value={formValues.name || ''} />
            <h1>
                CPF
            </h1>
            <input type="text" name="cpf" placeholder="CPF" onChange={handleInputChange} value={formValues.cpf || ''} />
            <h1>
                Endereço
            </h1>
            <input type="text" name="endereço" placeholder="ENDEREÇO" onChange={handleInputChange} value={formValues.endereço || ''} />

            <div className="radios">
                <label>
                    <h1>
                        Selecione seu sexo
                    </h1>
                    <input type="radio"
                        value="sexo"
                        name="feminino"
                        onChange={handleInputChange}
                        chacked={formValues.drink === 'sexo'} /> Feminino
                </label>

                <label>
                    <input type="radio"
                        value="sexo"
                        name="masculino"
                        onChange={handleInputChange}
                        chacked={formValues.drink === 'sexo'} /> Masculino
                </label>
            </div>

            <h1>
                Numero da carteira
            </h1>
            <input type="text" name="carteira" placeholder="Carteira" onChange={handleInputChange} value={formValues.carteira || ''} />
            <h1>
                Email
            </h1>
            <input type="text" name="email" placeholder="Email" onChange={handleInputChange} value={formValues.email || ''} />
            <h1>
                Data de Nascimento
            </h1>
            <input type="text" name="data" placeholder="Data de nascimento" onChange={handleInputChange} value={formValues.data || ''} />
            <h1>
                Senha
            </h1>
            <input type="text" name="senha" placeholder="Senha" onChange={handleInputChange} value={formValues.senha || ''} />
            <h1>
                Confirmar senha
            </h1>
            <input type="text" name="confirmar_senha" placeholder="Confirmar Senha" onChange={handleInputChange} value={formValues.confirmar_senha || ''} />
            <h1>
                Cargo
            </h1>
            <input type="text" name="cargo" placeholder="Cargo" onChange={handleInputChange} value={formValues.cargo || ''} />

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
export default CadastroFuncionario;