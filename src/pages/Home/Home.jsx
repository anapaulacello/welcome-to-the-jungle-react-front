import React,{useContext}  from 'react'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const Home = () => {
    const {user}=useContext(UserContext);
    return (
        <div>
            home
        </div>
    )
}

export default Home
