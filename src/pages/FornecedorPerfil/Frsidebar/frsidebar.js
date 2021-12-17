const frsidebar = ({sidebarOpen} ,closeSidebar) => {
    return(
        <div className= {sidebarOpen ? "frsidebar-responsive": "" }id="frsidebar">
            <div className="frsidebar__title">
                <div className = "frsidebar_img">
                    <h1> Locação Veículos </h1>
                </div>

                <i 
                onClick ={() => closeSidebar()}
                className ="fa fa-times"
                id = "frsidebarIcon"
                aria-hidden ="true"
                ></i>
            </div>
            
    
            <div className ="frsidebar_menu">
                <div className = "frsidebar__link active_menu_link">
                    <i className = "fa fa-minus-square">  
                    </i>
                        <a href = "#">
                            Home
                        </a>
                </div>
               

                <h2>
                Cadastrar Veiculos
                </h2>
                <div className = "frsidebar__link">
                <i className = "fa fa-tachometer">  
                    </i>
                        <a href = "#">
                            Cadastrar
                        </a>
                </div>

                <h2>
                     Gerenciar Veiculos
                </h2>
                <div className = "frsidebar__link">
                <i className = "fa fa-archive">  
                    </i>
                        <a href = "#">
                            Gerenciar
                        </a>
                </div>

                <div className = "frsidebar__link">
                <i className = "fa fa-file-text">  
                    </i>
                        <a href = "#">
                            Política de Privacidade
                        </a>
                </div>

                <div className = "frsidebar__log out">
                <i className = "fa fa-power-off">  
                    </i>
                        <a href = "#">
                            Log out
                        </a>
                </div>
            </div>
        </div>
    )

}
export default frsidebar;
