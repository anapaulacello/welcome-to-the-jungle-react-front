import React ,{useContext}from 'react'
import {Link} from "react-router-dom"
import { logout } from '../api/fetch_user';
import { UserContext } from '../App'
const Navbar = () => {
    const {user}=useContext(UserContext);
    const logoutsesion =async()=>{
        await logout()
      }
    return (
        <>
        {user?(
            <Link to="/">
                <button>home</button>
            </Link>
            ):null}
            <Link to="/animals">
                <button>animals</button>
            </Link>
            <Link to="/hebiatats">
                <button>habitats</button>
            </Link>
            <Link to="/logout">
                <button onClick={logoutsesion}>logout</button>
            </Link>
        </>
    )
}

export default Navbar
