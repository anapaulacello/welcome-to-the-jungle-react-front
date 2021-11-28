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
            <Link to="/">
                <button>home</button>
            </Link>
            
            <Link to="/animals">
                <button>animals</button>
            </Link>
            
            <Link to="/habitats">
                <button>habitats</button>
            </Link>
            <Link to="/new">
                <button>Nuevo</button>
            </Link>
            <Link to="/logout">
                <button onClick={logoutsesion}>logout</button>
            </Link>
        </ul>
    </nav>

    </>
    )
}

export default Navbar
