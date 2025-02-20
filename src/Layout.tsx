import { Outlet } from 'react-router-dom'
import GameNavbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import GFooter from './components/Footer';
import GSidebar from './components/Sidebar';

export default function Layout() {
    return (
        <div>
            <GameNavbar/>
            <GSidebar/>
            <Outlet/>
            <GFooter/>
        </div>
    )
}