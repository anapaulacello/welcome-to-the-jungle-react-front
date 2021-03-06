
import React,{ useState, useEffect }from 'react'
import { deleteHabitat, getHabitat } from '../../api/fetch_habitat';
import {Find,Spinner} from '../../components'
import "./Habitats.css"
import {Link} from 'react-router-dom'

const Habitats = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getData=async()=>{
        try {
            const {data}=await getHabitat();
            setItems(data.habitats)
            setIsLoaded(true);
        } catch (error) {
            setError(error);
            setIsLoaded(true);
        }
    }
    useEffect(async () => {
        getData();
      }, []);

    const delHab = async (id) => {
        const option = window.confirm("Estás Seguro que deseas Eliminar el elemento ");
        if(option){
            await deleteHabitat(id)
        }
    getData();
    };
    if (error) {
        return <div>Error:{error.message}</div>
    } else if (!isLoaded) {
        return <Spinner></Spinner>
    } else {
    return (
    <div className="habitats-container">
        <h1 className="habitas-title">Habitats</h1>
        <Find></Find>
        <div className="habitats-list">
        {items.map((element)=>(
            <div className="habitat_card-container">
            <Link to={`/${element.id}`} style={{ "text-decoration": "none" }}>
            <div className="habitat_properties">
                <h1 className="habitat_properties_item">{element.id}</h1>
                <h2 className="habitat_properties_item" >{element.name}</h2>
                <p className="habitat_properties_item" >{element.location}</p>
                <p className="habitat_properties_item" >{element.mode}</p>
            </div>
            </Link>
                <button className="btn btn-secondary " onClick={() => {
                    delHab(element._id);
                }}>borrar
                </button>
            </div>
        ))}
        </div>
    </div>
    )}
    
}

export default Habitats
