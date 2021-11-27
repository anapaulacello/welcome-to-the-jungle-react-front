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
            {user?(
            <Link to="/animals">
                <button>animals</button>
            </Link>
            ):null}
            {user?(
            <Link to="/habiatats">
                <button>habitats</button>
            </Link>
            ):null}
            {user?(
            <Link to="/logout">
                <button onClick={logoutsesion}>logout</button>
            </Link>
            ):null}
        </>
    )
}

export default Navbar
