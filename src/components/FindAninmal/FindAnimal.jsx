import React,{useState,useEffect}  from 'react'
import {getAnimalByName} from "../../api/fetch_animals"

const FindAnimal = () => {
    const [error, setError] = useState("");
    const [animalName, setAnimalName] = useState("");
    const [found, setFound]=useState({
        id:"",
        name:"",
        isCarnivore:"",
        family:""
    })
    const getData=async()=>{
        try {
            console.log("entro")
            const {data}=await getAnimalByName(animalName);
            setFound(data.aniamals[0])
            if(data){
                console.log("datos de data",data.habitat[0])
                console.log("datos de found",found)
            }
        } catch (error) {
            setError(error);
        }
    }
    useEffect(async () => {
        getData();
      }, []);

    const handleInput = (e) => {
        const {value } = e.target;
        setAnimalName(value)
        console.log("handle input",value)
    };

    return (
        <div className="find-animal-container">
            <input
                type="text"
                onChange={handleInput}
                className="find-input"
            />
            <button onClick={getData}>buscar</button>
            {found?(
                <div className="found_card">
                    <h1>{found.id}</h1>
                    <h1>{found.name}</h1>
                    <p>{found.isCarnivore}</p>
                    <p>{found.family}</p>
                </div>
            ):null}
        </div>
    )
}

export default FindAnimal
