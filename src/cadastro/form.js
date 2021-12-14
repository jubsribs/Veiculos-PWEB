import React, {Component } from 'react';


class form extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            name = "",
            email = "",
            endereco = ""
        }
        this.handlerInputChange = this.handlerInputChange.bind(this) 

    }
    handlerInputChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    rander(){
        return(
            <section>
            <form>
                <label>
                    nome:
                    <input onChange={this.handlerInputChange} type = 'text' placeholder = 'Nome'/>
                </label>
                <label>
                    email:
                    <input type = 'text' placeholder = 'Email'/>
                </label>
                <label>
                    endereco:
                    <input type = 'text' placeholder = 'Endereco'/>
                </label>
                <button type = 'submit'>
                    Enviar
                </button>
            </form>
            </section>
        )
    }
}
export default form 