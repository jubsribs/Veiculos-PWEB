    import Chart from '../charts/Chart';
    import './main.css';

    const Main = () =>{
        return(
            <main>
                <div className = "main__container">
                    <div className = "main__title">
                        <div className = "main__greeting">
                            <h1> Olá </h1>
                            <p>
                            Bem Vindo ao seu painel
                            </p>
                        </div>
                    </div>
                
                    <div className ="main__cards">
                        <div className ="card">
                            <i className= " fa fa-file-text fa-2x text-lightblue"></i>
                            <div className="card_inner">
                                <p className = "text-primary-p">
                                        Número de reservas
                                </p>
                                <span className = "font-bold text-title">
                                        1
                                </span>
                                </div>  
                                </div>


                                <div className = "card">
                                <i className= " fa fa-money fa-2x text-red"></i>
                                <div className="card_inner">
                                <p className = "text-primary-p">
                                            Pagamentos
                                    </p>
                                    <span className = "font-bold text-title">
                                                R$700,00
                                    </span>
                                    </div>  
                                    </div>
                                    </div>
                                    
                                <div className = "charts">
                             

                                <div className = "charts__right">
                                <div className = "charts__right__title">
                                <div>
                                    <h1> Atualizações </h1>
                                    <p> Salvador</p>
                                </div>
                                <i className = "fa fa-area-chart"></i>
                                </div>
                                <div className = "charts__right__cards">
                                 <div className = "card1"> 
                                    <h1>
                                        Custo
                                    </h1>
                                    <h1>
                                        R$1500
                                    </h1>
                                 </div>   
                                </div>
                                </div>
                                </div>
                            </div>

                        </main>
        )
    };
     export default Main;
