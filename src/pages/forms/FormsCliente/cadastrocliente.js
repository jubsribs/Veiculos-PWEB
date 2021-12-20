import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../../../services/apiService';
import './cadastrar.css';
function CadastroCliente() {

  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';

    const data = formValues[name] || {}

    if (isCheckbox) {
      data[value] = checked;
    }

    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };


  const handleSubmit = () => {
    apiService.registro('/', formValues).
      then(response => {
        if (response.status == 200) {
          navigate('/login', { replace: false })
        } else alert('Falha no cadastro')
      }).catch(_ => {
        alert('Falha no cadastro')
      })
  };


  return (
    <form onSubmit={handleSubmit}>
      <h1>
        Cadastrar Cliente
      </h1>

      <h1>
        Nome
      </h1>
      <input type="text" name="name" placeholder="Name" onChange={handleInputChange} value={formValues.name || ''} />
      <h1>
        CPF
      </h1>
      <input type="text" name="cpf" placeholder="Cpf" onChange={handleInputChange} value={formValues.cpf || ''} />
      <h1>
        Rg
      </h1>
      <input type="text" name="rg" placeholder="Rg" onChange={handleInputChange} value={formValues.rg || ''} />
      <h1>
        Cnh
      </h1>
      <input type="text" name="cnh" placeholder="CNH" onChange={handleInputChange} value={formValues.cnh || ''} />
      <h1>
        Email
      </h1>
      <input type="text" name="email" placeholder="Email" onChange={handleInputChange} value={formValues.email || ''} />
      <h1>
        Senha
      </h1>
      <input type="text" name="senha" placeholder="Senha" onChange={handleInputChange} value={formValues.senha || ''} />
      <h1>
        Confirmar senha
      </h1>
      <input type="text" name="confirmar_senha" placeholder="Confirmar Senha" onChange={handleInputChange} value={formValues.confirmar_senha || ''} />


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

      <div className="checks">
        <label>
          <h1>
            Qual rede social você possui?
          </h1>
          <input
            type="checkbox"
            name="social"
            value="twitter"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.twitter}
          />
          Twitter
        </label>
        <label>
          <input
            type="checkbox"
            name="social"
            value="instagram"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.instagram}
          />
          Instagram
        </label>
        <label>
          <input
            type="checkbox"
            name="social"
            value="facebook"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.facebook}
          />
          Facebook
        </label>
      </div>


      <button type="submit">
        Cadastrar
      </button>
    </form>
  )
};
export default CadastroCliente;