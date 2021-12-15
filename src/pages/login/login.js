import { Link } from 'react-router-dom';
import './login.css';


function Login() {
    const handleClickLogin = (values) => console.log(values);
    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://estrelalocadoramg.com.br/wp-content/uploads/2019/03/frota-2.png"
                    alt="Login App"
                />
            </div>

            <div className="login-right">
                <h1>Acessar Locadora</h1>

                <div className="login-loginInputEmail">
                    <input
                        type="text"
                        placeholder="Digite um email"
                    />
                </div>


                <div className="login-loginInputPassword">
                    <input
                        type="text"
                        placeholder="Digite sua senha"
                    />
                </div>

                <button type="submit">
                    Entrar
                </button>
                <h4> Não Possuo Conta</h4>
                <Link to="/adminCliente/reservar"> Cadastrar </Link>
                <button type="submit">
                    Cadastrar
                </button>

            </div>
        </div>
    );
}

export default Login;
