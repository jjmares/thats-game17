import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to='/games'> GAMES </Link>
            <Link to="/games/:id">Game Info</Link>
            <Outlet/>
        </div>
    )
}