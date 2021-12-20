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


            </div>
        </nav>
    )
}
export default Navbar;