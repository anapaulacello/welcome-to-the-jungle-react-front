
import React,{ useState, useEffect }from 'react'
import { deleteHabitat, getHabitat } from '../../api/fetch_habitat';
import HabitatsForm from '../../components/HbitatsForm/HabitatsForm'


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
        {items.map((element)=>(
            <div>
                <h1>{element.id}</h1>
                <h2>{element.name}</h2>
                <p>{element.location}</p>
                <p>{element.mode}</p>
                <button onClick={() => {
                    delHab(element._id);
                  }}>borrar</button>
            </div>
        ))}
    </div>
    )
    
}

export default Habitats
