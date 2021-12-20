import './Sidebar.css';


const Sidebar = ({sidebarOpen} ,closeSidebar) => {
    return(
        <div className= { sidebarOpen ? "sidebar-responsive": "" }id="sidebar">
            <div className="sidebar__title">

                    <h1> Locação Veículos </h1>
                <i 
                onClick ={() => closeSidebar()}
                className =" fa fa-times"
                id = "sidebarIcon"
                aria-hidden ="true"
                ></i>
            </div>
            <div className =" sidebar_menu">
                <div className = "sidebar__link active_menu_link">
                        <a href = "#">
                            Home
                        </a>
                </div>
                <h2>
                    Reserva Veículo
                </h2>
                <div className = "sidebar__link">
                        <a href = "#">
                            Reserva 
                        </a>
                </div>
                <h2>
                    Devolução Veículo
                </h2>
                <div className = "sidebar__link">
                        <a href = "#">
                            Devolução 
                        </a>
                </div>
                <h2>
                    Perfil
                </h2>
                <div className = "sidebar__link">
                        <a href = "#">
                            Reservas
                        </a>
                </div>
                <div className = "sidebar__link">
                        <a href = "#">
                            Pagamentos e custos
                        </a>
                </div>
                <div className = "sidebar__link">
                        <a href = "#">
                            Usuários
                        </a>
                </div>
                <div className = "sidebar__link">
                        <a href = "#">
                            Política de Privacidade
                        </a>
                </div>
                <div className = "sidebar__log out">
                        <a href = "#">
                            Log out
                        </a>
                </div>
            </div>
        </div>
    )

}
export default Sidebar;