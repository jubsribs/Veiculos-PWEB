const frsidebar = ({frsidebarOpen} ,frcloseSidebar) => {
    return(
        <div className= {frsidebarOpen ? "frsidebar-responsive": "" }id="frsidebar">
            <div className="frsidebar__title">
                  <h1> Locação Veículos </h1>
               

                <i 
                onClick ={() => frcloseSidebar()}
                className ="fa fa-times"
                id = "frsidebarIcon"
                aria-hidden ="true"
                ></i>
            </div>
            
    
            <div className ="frsidebar_menu">
                <div className = "frsidebar__link active_menu_link">
                        <a href = "#">
                            Home
                        </a>
                </div>
               

                <h2>
                Cadastrar Veiculos
                </h2>
                <div className = "frsidebar__link">
                        <a href = "#">
                            Cadastrar
                        </a>
                </div>

                <h2>
                     Gerenciar Veiculos
                </h2>
                <div className = "frsidebar__link">
                        <a href = "#">
                            Gerenciar
                        </a>
                </div>

                <div className = "frsidebar__link">
                        <a href = "#">
                            Política de Privacidade
                        </a>
                </div>

                <div className = "frsidebar__log out">
                        <a href = "#">
                            Log out
                        </a>
                </div>
            </div>
        </div>
    )

}
export default frsidebar;