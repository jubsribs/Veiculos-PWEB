import './frnavbar.css';

const frnavbar = (frsidebarOpen, fropenSidebar) =>{
    return(
        <nav className = "frnavbar">
            
            <div className = "frnavbar__left">
                <a href="#"> Lançar Despesas</a>
                <a href="#"> Gerenciar Veiculo</a>
                <a href="#" className ="activate_link"> Admin</a>
            </div>
            <div className = "frnavbar__right">


            </div>
        </nav>
    )
}
export default frnavbar;