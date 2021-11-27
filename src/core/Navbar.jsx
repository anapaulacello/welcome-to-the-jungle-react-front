import React from 'react'
import {Link} from "react-router-dom"
import { logout } from '../api/fetch_user';

const Navbar = () => {
    const logoutsesion =async()=>{
        await logout()
      }
    return (
        <>
            <Link to="/">
                <button>home</button>
            </Link>
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
