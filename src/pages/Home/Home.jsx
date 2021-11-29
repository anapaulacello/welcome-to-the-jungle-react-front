import React,{useContext}  from 'react'
import { UserContext } from '../../App';
import { Link } from "react-router-dom";
import "./Home.css"
import 'animate.css';

const Home = () => {
    const {user}=useContext(UserContext);
    console.log(user)
    return (
        <div className=" home-container">
          <h1 className=" animate__animated animate__fadeIn home_title">Welcome to the Jungle</h1>
          <div className="  animate__animated animate__fadeIn content-container">
            <ul className="content_list-container">
              <li className="content_list_item">
              <Link to="/animals" style={{ "text-decoration": "none" }}>
                <p className="go-to" >Animals ►</p>
              </Link>
              </li>
              <li className="content_list_item">
              <Link to="/animals" style={{ "text-decoration": "none" }}>
                <p className="go-to" >Habitats ►</p>
              </Link>
              </li>
              <li className="content_list_item" >
              <Link to="/new" style={{ "text-decoration": "none" }}>
                <p className="go-to" >Añadir ►</p>
              </Link>
              </li>
            </ul>
            <p className="home_paragraph">
            En la clasificación científica de los seres vivos, los animales (Animalia) o metazoos (Metazoa) constituyen un reino que reúne un amplio grupo de organismos que son eucariotas, heterótrofos, pluricelulares y tisulares (excepto los poríferos). Se caracterizan por su amplia capacidad de movimiento, por no tener cloroplasto (aunque hay excepciones, como en el caso de Elysia chlorotica) ni pared celular, y por su desarrollo embrionario; que atraviesa una fase de blástula y determina un plan corporal fijo (aunque muchas especies pueden sufrir una metamorfosis posterior como los artrópodos). Los animales forman un grupo natural estrechamente emparentado con los hongos (reino Fungi). 
            </p>
          </div>
        </div>
    )
}

export default Home
