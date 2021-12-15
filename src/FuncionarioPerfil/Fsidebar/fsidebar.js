const fsidebar = ({fsidebarOpen} ,fcloseSidebar) => {
    return(
        <div className= { fsidebarOpen ? "fsidebar-responsive": "" }id="fsidebar">
            <div className="fsidebar__title">
                <div className = "fsidebar_img">
                    <h1> Locação Veículos </h1>
                </div>

                <i 
                onClick ={() => fcloseSidebar()}
                className ="fa fa-times"
                id = "fsidebarIcon"
                aria-hidden ="true"
                ></i>
            </div>
            
    
            <div className ="fsidebar_menu">
                <div className = "fsidebar__link active_menu_link">
                    <i className = "fa fa-minus-square">  
                    </i>
                        <a href = "#">
                            Home
                        </a>
                </div>
               

                <h2>
                Permissão Locações
                </h2>
                <div className = "fsidebar__link">
                <i className = "fa fa-tachometer">  
                    </i>
                        <a href = "#">
                            Permissão
                        </a>
                </div>

                <h2>
                     Permissões de acesso
                </h2>
                <div className = "fsidebar__link">
                <i className = "fa fa-archive">  
                    </i>
                        <a href = "#">
                            Permissão
                        </a>
                </div>

                <h2>
                CheckList para Devoluções
                </h2>
                <div className = "fsidebar__link">
                <i className = "fa fa-tasks">  
                    </i>
                        <a href = "#">
                            CheckList
                        </a>

                </div>


                <div className = "fsidebar__link">
                <i className = "fa fa-file-text">  
                    </i>
                        <a href = "#">
                            Política de Privacidade
                        </a>
                </div>

                <div className = "fsidebar__log out">
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
export default fsidebar;