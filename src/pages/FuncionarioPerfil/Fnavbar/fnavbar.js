import './fnavbar.css';

const fnavbar = (sidebarOpen, openSidebar) =>{
    return(
        <nav className = "fnavbar">
            
            <div className = "fnavbar__left">
                <a href="#"> Permissão Acesso</a>
                <a href="#"> Permissão Locações</a>
                <a href="#" className ="activate_link"> Checklist</a>
            </div>
            <div className = "fnavbar__right">
               


            </div>
        </nav>
    )
}
export default fnavbar;