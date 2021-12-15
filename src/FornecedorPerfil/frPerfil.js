const frPerfil = () => {

    const[frsidebarOpen, setfrSidebarOpen] = useState(false);
    const fropenSidebar = () =>{
        setfrSidebarOpen(true);
    };
    const frcloseSidebar = () =>{
        setfrSidebarOpen(false);
    };

    return(
        <div className="container">
            <frNavbar frsidebarOpen = {frsidebarOpen} frcloseSidebar = {fropenSidebar} />
            <Main/>
            <frSidebar frsidebarOpen = {frsidebarOpen} frcloseSidebar = {frcloseSidebar} />

        </div>
    )
}
export default frPerfil;