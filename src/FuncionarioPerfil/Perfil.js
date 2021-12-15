const Perfil = () => {

    const[fsidebarOpen, setfSidebarOpen] = useState(false);
    const fopenSidebar = () =>{
        setfSidebarOpen(true);
    };
    const fcloseSidebar = () =>{
        setfSidebarOpen(false);
    };

    return(
        <div className="container">
            <fNavbar fsidebarOpen = {fsidebarOpen} fcloseSidebar = {fopenSidebar} />
            <Main/>
            <fSidebar fsidebarOpen = {fsidebarOpen} fcloseSidebar = {fcloseSidebar} />

        </div>
    )
}
export default Perfil;
