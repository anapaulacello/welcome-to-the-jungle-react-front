import React,{ useState, useEffect } from 'react'
import { GET_ANIMALS } from '../../api/fetch_routes'
import axios from 'axios'
import { Spinner } from '../../components'

const Animals = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios(GET_ANIMALS).then(
            (res) => {
                setItems(res.data.data.animal);
                console.log(items)
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);
    if (error) {
        return <div>Error:{error.message}</div>
    } else if (!isLoaded) {
        return <Spinner></Spinner>
    } else {
    return (
    <div>
        <ul className="list-container">
         {items.map((item)=>(
            <li className="list-card" key={item._id}>
                <h1>{item.id}</h1>
                <h2>nombre:{item.name}</h2>
                {item.isCarnivore?
                <p>Carinivoro</p>:
                <p>No es carnivoro</p>
                }
                <p>{item.family.name}</p>
                {item.family.livingInGroup?
                <p>Vive en manada</p>:
                <p>Vive solitario</p>
                }
            </li>
        ))} 
        </ul>

    </div>
    )
    }
}

export default Animals
