import React,{useContext}  from 'react'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const {user}=useContext(UserContext);
    return (
        <div>
        <div className="autentification">
        {user==null?(        
            <Link to="/login" style={{"text-decoration":"none"}}>
              <button className="login">Login</button>
            </Link>
          ):null}
          {user==null?( 
            <Link to="/register" style={{"text-decoration":"none"}}>
              <button className="register">Register</button>
            </Link>
          ):null}
        </div>
              <h1>Welcome to th Jungle</h1>
        </div>
    )
}

export default Home
