import React,{useContext}  from 'react'
import { UserContext } from '../../App';
import { Link, useHistory } from "react-router-dom";
import "./Home.css"
import 'animate.css';

const Home = () => {
    const {user}=useContext(UserContext);
    console.log(user)
    return (
        <div className=" home-container">
          <h1 className=" animate__animated animate__fadeIn home_title">Welcome to the Jungle</h1>
          <div className="  animate__animated animate__fadeIn content-container">
          <h3 className="contet-title">Contenido</h3>
            <ul className="content_list-container">
              <li className="content_list_item">
              <Link to="/animals">
                <a className="go-to-animals" >Animals</a>
              </Link>
              </li>
              <li className="content_list_item">
              <Link to="/habitats">
                <a className="go-to-habitat" >Habitat</a>
              </Link>
              </li>
              <li className="content_list_item">
              <Link to="/new">
                <a className="go-to-new" >Añade contenido</a>
              </Link>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Home
