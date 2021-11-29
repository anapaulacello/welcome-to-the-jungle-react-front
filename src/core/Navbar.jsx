import React ,{useContext,useState}from 'react'
import {Link} from "react-router-dom"
import { logout } from '../api/fetch_user';
import { UserContext } from '../App'
import './Navbar.css';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar)
    };

    const {user}=useContext(UserContext);
    const logoutsesion =async()=>{
        await logout()
      }
    
    return(
    <>
    <div className="nav-button-container">
        <a className="nav-button" onClick={showSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
        </a>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="list-container" onClick={showSidebar}>
            <Link to="/" style={{ "text-decoration": "none" }}>
                <p role="button" className="list_item">HOME</p>
            </Link>
            
            <Link to="/animals" style={{ "text-decoration": "none" }}>
                <p role="button" className="list_item">ANIMALS</p>
            </Link>
            
            <Link to="/habitats" style={{ "text-decoration": "none" }}>
                <p role="button" className="list_item">HABITATS</p>
            </Link>
            <Link to="/new" style={{ "text-decoration": "none" }}>
                <p role="button" className="list_item">NUEVO</p>
            </Link>
            <Link to="/logout" style={{ "text-decoration": "none" }}>
                <p role="button" className="list_item" onClick={logoutsesion}>LOGOUT</p>
            </Link>
        </ul>
    </nav>

    </>
    )
}

export default Navbar
