import fcharts from '../Fcharts/fcharts';
import './fmain.css';

const fmain = () =>{
    return(
        <main>
            <div className = "fmain__container">
                <div className = "fmain__title">
                    <div className = "fmain__greeting">
                        <h1> Olá </h1>
                        <p>
                        Bem Vindo ao seu painel
                        </p>
                    </div>
                </div>
            
                <div className ="fmain__cards">
                    <div className ="fcard">
                        <i className= " fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="fcard_inner">
                            <p className = "text-primary-p">
                                    Permissões de acesso
                                    </p>
                            <span className = "font-bold text-title">
                                    10
                            </span>
                            </div>  
                            </div>


                            <div className = "fcard">
                            <i className= " fa fa-money fa-2x text-red"></i>
                            <div className="fcard_inner">
                            <p className = "text-primary-p">
                                        Permissão Locações
                                </p>
                                <span className = "font-bold text-title">
                                            10
                                </span>
                                </div>  
                                </div>


                            <div className = "fcard">
                            <i className= " fa fa-money fa-2x text-yellow"></i>
                            <div className="fcard_inner">
                            <p className = "text-primary-p">
                                        CheckList para Devoluções
                                </p>
                                <span className = "font-bold text-title">
                                            5
                                </span>
                                </div>  
                                </div>
                                </div>
                                
                        </div>

                    </main>
    )
};
 export default fmain;