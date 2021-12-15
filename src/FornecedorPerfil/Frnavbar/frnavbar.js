import './frnavbar.css';

const frnavbar = (frsidebarOpen, fropenSidebar) =>{
    return(
        <nav className = "frnavbar">
            
            <div className = "frnavbar__left">
                <a href="#"> Cadastrar Veiculo</a>
                <a href="#"> Gerenciar Veiculo</a>
                <a href="#" className ="activate_link"> Admin</a>
            </div>
            <div className = "frnavbar__right">
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
export default frnavbar;