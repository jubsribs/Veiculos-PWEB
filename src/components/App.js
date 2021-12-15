import {useState} from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import './App.css';


const App = () => {

    const[sidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () =>{
        setSidebarOpen(true);
    };
    const closeSidebar = () =>{
        setSidebarOpen(false);
    };

    return(
        <div className="container">
            <Navbar sidebarOpen = {sidebarOpen} closeSidebar = {openSidebar} />
            <Main/>
            <Sidebar sidebarOpen = {sidebarOpen} closeSidebar = {closeSidebar} />

        </div>
    )
}
export default App;