const fsidebar = ({sidebarOpen} ,closeSidebar) => {
    return(
        <div className= {sidebarOpen ? "fsidebar-responsive": "" }id="fsidebar">
            <div className="fsidebar__title">
                    <h1> Locação Veículos </h1>

                <i 
                onClick ={() => closeSidebar()}
                id = "fsidebarIcon"
                aria-hidden ="true"
                ></i>
            </div>
            
    
            <div className ="fsidebar_menu">
                <div className = "fsidebar__link factive_menu_link">
                        <a href = "#">
                            Home
                        </a>
                </div>
               

                <h2>
                Permissão Locações
                </h2>
                <div className = "fsidebar__link">
                        <a href = "#">
                            Permissão Locação
                        </a>
                </div>

                <h2>
                     Permissões de acesso
                </h2>
                <div className = "fsidebar__link">
                        <a href = "#">
                            Permissão Acesso
                        </a>
                </div>

                <h2>
                CheckList para Devoluções
                </h2>
                <div className = "fsidebar__link">
                        <a href = "#">
                            CheckList
                        </a>

                </div>


                <div className = "fsidebar__link">
                        <a href = "#">
                            Política de Privacidade
                        </a>
                </div>

                <div className = "fsidebar__log out">
                        <a href = "#">
                            Log out
                        </a>
                </div>
            </div>
        </div>
    )

}
export default fsidebar;