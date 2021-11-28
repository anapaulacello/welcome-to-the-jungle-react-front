import React,{useContext}  from 'react'
import { UserContext } from '../../App';
import "./Home.css"

const Home = () => {
    const {user}=useContext(UserContext);
    console.log(user)
    return (
        <div>
          <h1>Welcome to th Jungle</h1>
        </div>
    )
}

export default Home
