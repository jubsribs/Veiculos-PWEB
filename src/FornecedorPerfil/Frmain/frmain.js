import fcharts from '../Frcharts/frcharts';
import './frPerfil.css';

const frmain = () =>{
    return(
        <main>
            <div className = "frmain__container">
                <div className = "frmain__title">
                    <div className = "frmain__greeting">
                        <h1> Olá </h1>
                        <p>
                        Bem Vindo ao seu painel
                        </p>
                    </div>
                </div>
            
                <div className ="frmain__cards">
                    <div className ="frcard">
                        <i className= " fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="frcard_inner">
                            <p className = "text-primary-p">
                                    Veiculos Cadastrados
                                    </p>
                            <span className = "font-bold text-title">
                                    10
                            </span>
                            </div>  
                            </div>

                            </div>
                                
                        </div>

                    </main>
    )
};
 export default frmain;