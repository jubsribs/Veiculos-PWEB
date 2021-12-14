import './App.css';
import {Formik, Form, Field, ErrorMessage, yupToFormErrors} from "formik";
import * as yup from "yup";

function App() {

  const handleClickLogin = (values)=> console.log(values);
  
  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email").required("Campo Obrigatório"),
    password: yup.string().min(8,"A senha deve conter 8 caracteres").required("Campo Obrigatório"),
  });


  return (
    <div className="login">
    <div className ="login-logo">
      <img src= "http://capposeguros.com.br/wp-content/uploads/2014/01/Pack_veiculos_sombra.png" 
      alt= "Login App" 
      />
    </div>

    <div className="login-right">
    <h1>Acessar Locadora</h1>
    
    <div className = "login-loginInputEmail">
      <input
        type="text"
        placeholder = "Digite um email"
        />
    </div>

    
    <div className = "login-loginInputPassword">
      <input
        type="text"
        placeholder = "Digite sua senha"
        />
    </div>

    <button type="submit">
      Entrar
    </button>
    <h4> Não Possuo Conta</h4>
    <button type="submit">
      Cadastrar
    </button>

    </div>
    </div>
  );
}

export default App;
