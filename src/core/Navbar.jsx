import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
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
        </>
    )
}

export default Navbar
