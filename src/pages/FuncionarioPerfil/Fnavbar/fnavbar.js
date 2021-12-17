import './fnavbar.css';

const fnavbar = (fsidebarOpen, fopenSidebar) =>{
    return(
        <nav className = "fnavbar">
            
            <div className = "fnavbar__left">
                <a href="#"> Permissão Acesso</a>
                <a href="#"> Permissão Locações</a>
                <a href="#" className ="activate_link"> Checklist</a>
            </div>
            <div className = "fnavbar__right">
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
export default fnavbar;