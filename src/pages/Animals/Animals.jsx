import React,{ useState, useEffect } from 'react'
import { getAnimal,deleteAnimal } from '../../api/fetch_animals';
import { FindAnimal } from '../../components';
import "./Animals.css"

const Animals = () => {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    const getData=async()=>{
        try {
            const {data}=await getAnimal();
            setItems(data.animal)
        } catch (error) {
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

    return (
        <div className="animals-container">
        <FindAnimal></FindAnimal>
        {items.map((element)=>(
            <div>
                <h1>{element.id}</h1>
                <h2>{element.name}</h2>
                {element.isCarnivore?<p>come carne</p>:<p>no come carne</p>}
                <p>{element.family.name}</p>
                <button onClick={() => {
                    delAnimal(element._id);
                  }}>borrar</button>
            </div>
        ))}
    </div>
    )
}

export default Animals
