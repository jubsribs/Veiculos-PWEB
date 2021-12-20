import { Link, useNavigate, useRoutes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import './login.css';
import apiService from "../../services/apiService.js"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let nextRoute = ''
    const navigate = useNavigate()

    const HandleClickLogin = () => {
        apiService.login({
            'login': email,
            'senha': password
        }).then(response => {
            let resposta = response

            if (resposta != {}) {
                if (resposta.role == 'cliente') {
                    nextRoute = '/adminCliente'
                } else if (resposta.role == 'fornecedor') {
                    nextRoute = '/adminFornecedor'
                } else nextRoute = '/adminFuncionario'
            }


            navigate(nextRoute, { replace: false })
        }).catch(e => {
            console.log(e)
        })


    }

    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://estrelalocadoramg.com.br/wp-content/uploads/2019/03/frota-2.png"
                    alt="Login App"
                />
            </div>

            <div className="login-right">
                <h1>Acessar Locadora</h1>

                <form onSubmit={HandleClickLogin}>
                    <Form.Group className="login-loginInputEmail" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="password" className="login-loginInputPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit">Entrar</Button>
                </form>

                <h4> Não Possuo Conta</h4>
                <Link className='link' to="/toCadastro"> Cadastrar </Link>
            </div>
        </div>
    );
}

export default Login;
