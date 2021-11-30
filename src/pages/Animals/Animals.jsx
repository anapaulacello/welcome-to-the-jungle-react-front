import React,{ useState, useEffect } from 'react'
import { getAnimal,deleteAnimal } from '../../api/fetch_animals';
import { FindAnimal ,Spinner} from '../../components';
import "./Animals.css"
import {Link} from 'react-router-dom'

const Animals = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getData=async()=>{
        try {
            const {data}=await getAnimal();
            setItems(data.animal)
            setIsLoaded(true);
        } catch (error) {
            setIsLoaded(true);
            setError(error);
        }
    }
    useEffect(async () => {
        getData();
      }, []);

    const delAnimal = async (id) => {
        const option = window.confirm("Estás Seguro que deseas Eliminar el elemento ");
        if(option){
            await deleteAnimal(id)
        }
        getData();
    };
    if (error) {
        return <div>Error:{error.message}</div>
    } else if (!isLoaded) {
        return <Spinner></Spinner>
    } else {
    return (
        <div className="animals-container">
            <h1 className="animals-title">Animales</h1>
            <FindAnimal></FindAnimal>
            <div className="animals-list">
            {items.map((element)=>(
                <div className="animals-card">
                <Link to={`/${element.id}`} style={{ "text-decoration": "none" }}>
                <div>
                    <h1 className="habitat_properties_item">{element.id}</h1>
                    <h2 className="habitat_properties_item">{element.name}</h2>
                    {element.isCarnivore?<p className="habitat_properties_item">come carne</p>
                    :<p className="habitat_properties_item">no come carne</p>}
                    <p className="habitat_properties_item">{element.family.name}</p>
                </div>
                </Link>
                <button className="btn btn-secondary "
                    onClick={() => {
                        delAnimal(element._id);
                    }}>borrar</button>
                </div>
            ))}
            </div>
    </div>
    )}
}

export default Animals
