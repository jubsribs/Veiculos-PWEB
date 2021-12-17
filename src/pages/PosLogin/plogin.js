import './plogin.css';
import React, { useState } from 'react';
import { Link, useNavigate, useRoutes } from 'react-router-dom';


function Plogin() {
  const [currentOption, setCurrentOption] = useState('cliente')
  let nextRoute = ''
  const navigate = useNavigate()

  const changeOption = (option) => {
    setCurrentOption(option)
  }

  const handleClick = () => {
    if (currentOption == 'cliente') {
      nextRoute = '/cadastroCliente'
    } else if (currentOption == 'fornecedor') {
      nextRoute = '/cadastroFornecedor'
    } else nextRoute = '/cadastroFuncionario'

    navigate(nextRoute, { replace: false })
  }

  return (
    <div class="field">
      <p class="control has-icons-left">
        <span class="select">
          <form>
            <select
              onChange={(event) => changeOption(event.target.value)}
              value={currentOption}>
              <option value={'cliente'} selected>Cliente</option>
              <option value={'funcionario'}>Funcionario</option>
              <option value={'fornecedor'}>Fornecedor</option>
            </select>
          </form>

        </span>
        <span class="icon is-small is-left">
          <i class="fas fa-globe"></i>
        </span>
      </p>
      <button type="submit" onClick={handleClick}>
        Cadastrar
      </button>
    </div>

  )
};

export default Plogin;