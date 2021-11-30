import React,{useState,useEffect}  from 'react'
import {getAnimalByName} from "../../api/fetch_animals"
import "./FindAnimal.css"

const FindAnimal = () => {
    const [error, setError] = useState("");
    const [animalName, setAnimalName] = useState("");
    const [found, setFound]=useState({
        id:"",
        name:"",
        isCarnivore:"",
        family:{name:""}
    })

    const getData=async()=>{
        try {
            const {data}=await getAnimalByName(animalName);
            setFound(data.Animal[0])
            if(data){
                console.log("datos de data",data.Animal[0])
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
        <div className="find-animal_intput-button">
            <input
            className="form-control find-input" 
            id="formGroupExampleInput"
            type="text"
            onChange={handleInput}
            placeholder="nombre de animal"
            />
             <button className="btn btn-success " onClick={getData}>buscar</button>
        </div>
          {found?(
            <div className="found_card">
                <h1>{found.id}</h1>
                <h1>{found.name}</h1>
                <p>{found.isCarnivore}</p>
                <p>{found.family.name}</p>
            </div>
        ):null} 
        </div>
    )
}

export default FindAnimal


