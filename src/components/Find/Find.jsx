import React,{useState,useEffect} from 'react'
import { getHabitatByName } from '../../api/fetch_habitat'
import "./Find.css"

const Find = () => {
    const [error, setError] = useState("");
    const [habitatName, setHabitatName] = useState("");
    const [found, setFound]=useState()

      const getData=async()=>{
        try {
            const {data}=await getHabitatByName(habitatName);
            setFound(data.habitat[0].name)
            if(data){
                console.log("datos de habitat",data.habitat[0])
                console.log(found)
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
        setHabitatName(value)
        console.log("handle input",value)
    };
    return (
        <div className="find-container">
            <input
                type="text"
                onChange={handleInput}
                className="find-input"
            />
            <button onClick={getData}>buscar</button>
            <h1>{found}</h1>
        </div>
    )
}

export default Find
