import './navbar.css';

const Navbar = (sidebarOpen, openSidebar) =>{
    return(
        <nav className = "navbar">
            
            <div className = "navbar__left">
                <a href="#"> Reserva</a>
                <a href="#"> Devolução</a>
                <a href="#" className ="activate_link"> Admin</a>
            </div>
            <div className = "navbar__right">
                <a href="#"> 
                <i className = "fa fa-search"></i>
                </a>

                <a href="#"> 
                <i className = "fa fa-clock-o"></i>
                </a>


            </div>
        </nav>
    )
}
export default Navbar;