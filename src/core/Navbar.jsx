import React ,{useContext,useState}from 'react'
import {Link} from "react-router-dom"
import { logout } from '../api/fetch_user';
import { UserContext } from '../App'
import './Navbar.css';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const {user}=useContext(UserContext);
    const logoutsesion =async()=>{
        await logout()
      }
    
    return(
    <>
    <div className="nav-button-container">
        <button className="nav-button" onClick={showSidebar}>menu</button>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="list-container" onClick={showSidebar}>
            <Link to="/" style={{ "text-decoration": "none" }}>
                <p className="list_item">home</p>
            </Link>
            
            <Link to="/animals" style={{ "text-decoration": "none" }}>
                <p className="list_item">animals</p>
            </Link>
            
            <Link to="/habitats" style={{ "text-decoration": "none" }}>
                <p className="list_item">habitats</p>
            </Link>
            <Link to="/new" style={{ "text-decoration": "none" }}>
                <p className="list_item">Nuevo</p>
            </Link>
            <Link to="/logout">
                <p onClick={logoutsesion}>logout</p>
            </Link>
        </ul>
    </nav>

    </>
    )
}

export default Navbar
