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
  
   const handleSubmit = (e) =>{
    e.preventDefault();
  };
  
  
    return (
  
  
        <form onSubmit={handleSubmit}>
            <h1>
                Cadastrar Veiculo
            </h1>
  
            <h1>
                Placa
            </h1>
            <input type="text" name="placa" placeholder="placa" onChange={handleInputChange} value={formValues.placa|| ''} />
            <h1>
                Chassi
            </h1>
            <input type="text" name="chassi" placeholder="chassi" onChange={handleInputChange} value={formValues.chassi || ''} />
            <h1>
                Remavam
            </h1>
            <input type="text" name="remavam" placeholder="remavam" onChange={handleInputChange} value={formValues.remavam || ''} />
  
            <h1>
               Quilometragem
            </h1>
            <input type="text" name="quilometragem" placeholder="quilometragem" onChange={handleInputChange} value={formValues.quilometragem || ''} />
            <h1>
            nível de combustível
            </h1>
            <input type="text" name="nivel" placeholder="nivel" onChange={handleInputChange} value={formValues.nivel || ''} />
            <h1>
                Cadeiras
            </h1>
            <input type="text" name="cadeiras" placeholder="cadeiras" onChange={handleInputChange} value={formValues.cadeiras|| ''} />
            <h1>
                Assento de elevação
            </h1>
            <input type="text" name="assento" placeholder="assento" onChange={handleInputChange} value={formValues.assento || ''} />
            <h1>
              Existência de GPS
            </h1>
            <input type="text" name="gps" placeholder="gps" onChange={handleInputChange} value={formValues.gps || ''} />
            
            <div className="radios">
                <label>
                    <h1>
                        Classificação
                    </h1>
                    <input type="radio"
                        value="classificar"
                        name="familiar"
                        onChange={handleInputChange}
                        chacked={formValues.drink === 'classificar'} /> Familiar
                </label>
  
                <label>
                    <input type="radio"
                        value="classificar"
                        name="passeio"
                        onChange={handleInputChange}
                        chacked={formValues.drink === 'classificar'} /> Passeio
                </label>
  
                <label>
                    <input type="radio"
                        value="classificar"
                        name="utilitario"
                        onChange={handleInputChange}
                        chacked={formValues.drink === 'classificar'} /> Utilitário
                </label>
            </div>
  
            <button type="submit">
                Cadastrar
            </button>
        </form>
    )
  };
  export default CadastroFuncionario;