import React,{ useState, useEffect }from 'react'
import { deleteHabitat, getHabitat } from '../../api/fetch_habitat';


const Habitats = () => {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    const getData=async()=>{
        try {
            const {data}=await getHabitat();
            console.loga(data)
            setItems(data.habitats)
        } catch (error) {
            setError(error);
        }
    }
    useEffect(async () => {
        getData();
      }, []);

    const delHab = async () => {
    await deleteHabitat();
    getData();
    };

    return (
    <div className="habitat-container">
        {items.map((element)=>(
            <h1>{element.id}</h1>
        ))}
    </div>
    )
    
}

export default Habitats
