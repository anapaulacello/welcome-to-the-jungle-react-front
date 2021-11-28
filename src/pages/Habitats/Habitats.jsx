
import React,{ useState, useEffect }from 'react'
import { deleteHabitat, getHabitat } from '../../api/fetch_habitat';
import {Find} from '../../components'
import "./Habitats.css"
import {Link} from 'react-router-dom'

const Habitats = () => {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    const getData=async()=>{
        try {
            const {data}=await getHabitat();
            setItems(data.habitats)
        } catch (error) {
            setError(error);
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

    return (
    <div className="habitat-container">
    <div className="find-container"><Find></Find></div>
        {items.map((element)=>(
            <div className="habitat_card-container">
            <Link to={`/${element._id}`}>
            <div className="habitat_properties">
                <h1>{element.id}</h1>
                <h2>{element.name}</h2>
                <p>{element.location}</p>
                <p>{element.mode}</p>
            </div>
            </Link>
                <button onClick={() => {
                    delHab(element._id);
                  }}>borrar
                </button>
            </div>
        
        ))}
    </div>
    )
    
}

export default Habitats
