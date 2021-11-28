import React,{useState,useEffect}  from 'react'
import {getAnimalByName} from "../../api/fetch_animals"

const FindAnimal = () => {
    const [error, setError] = useState("");
    const [animalName, setAnimalName] = useState("");
    const [found, setFound]=useState()

    return (
        <div>
            buscar animal
        </div>
    )
}

export default FindAnimal
