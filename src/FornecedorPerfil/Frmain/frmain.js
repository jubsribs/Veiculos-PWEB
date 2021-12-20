import fcharts from '../Frcharts/frcharts';
import './frmain.css';

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
                        <div className="frcard_inner">
                            <p className = "text-primary-p">
                                    Valores Despesas
                                    </p>
                            <span className = "font-bold text-title">
                                    R$1000
                            </span>
                            </div>  
                            </div>

                            </div>
                                
                        </div>

                    </main>
    )
};
 export default frmain;