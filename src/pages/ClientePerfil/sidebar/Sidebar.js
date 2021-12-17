import './Sidebar.css';


const Sidebar = ({sidebarOpen} ,closeSidebar) => {
    return(
        <div className= { sidebarOpen ? "sidebar-responsive": "" }id="sidebar">
            <div className="sidebar__title">
                <div className = "sidebar_img">
                    <h1> Locação Veículos </h1>
                </div>

                <i 
                onClick ={() => closeSidebar()}
                className =" fa fa-times"
                id = "sidebarIcon"
                aria-hidden ="true"
                ></i>
            </div>
            <div className =" sidebar_menu">
                <div className = "sidebar__link active_menu_link">
                    <i className = "fa fa-minus-square">  
                    </i>
                        <a href = "#">
                            Home
                        </a>
                </div>
                <h2>
                    Reserva Veículo
                </h2>
                <div className = "sidebar__link">
                <i className = "fa fa-tachometer">  
                    </i>
                        <a href = "#">
                            Reserva 
                        </a>
                </div>
                <h2>
                    Devolução Veículo
                </h2>
                <div className = "sidebar__link">
                <i className = "fa fa-archive">  
                    </i>
                        <a href = "#">
                            Devolução 
                        </a>
                </div>
                <h2>
                    Perfil
                </h2>
                <div className = "sidebar__link">
                <i className = "fa fa-tasks">  
                    </i>
                        <a href = "#">
                            Reservas
                        </a>
                </div>
                <div className = "sidebar__link">
                <i className = "fa fa-money">  
                    </i>
                        <a href = "#">
                            Pagamentos e custos
                        </a>
                </div>
                <div className = "sidebar__link">
                <i className = "fa fa-user-circle">  
                    </i>
                        <a href = "#">
                            Usuários
                        </a>
                </div>
                <div className = "sidebar__link">
                <i className = "fa fa-file-text">  
                    </i>
                        <a href = "#">
                            Política de Privacidade
                        </a>
                </div>
                <div className = "sidebar__log out">
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
export default Sidebar;