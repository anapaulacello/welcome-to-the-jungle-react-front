import React,{useState,useEffect} from 'react'
import { getHabitatByName } from '../../api/fetch_habitat'
import "./Find.css"

const Find = () => {
    const [error, setError] = useState("");
    const [habitatName, setHabitatName] = useState("");
    const [found, setFound]=useState({
        id:"",
        name:"",
        location:"",
        mode:""
    })

      const getData=async()=>{
        try {
            const {data}=await getHabitatByName(habitatName);
            setFound(data.habitat[0])
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
        setHabitatName(value)
        console.log("handle input",value)
    };
    return (
        <div className="find-habitat-container">
        <div className="find-habitat_intput-button">
            <input
            className="form-control find-input" id="formGroupExampleInput"
            type="text"
            onChange={handleInput}
            placeholder="nombre de habitat"
            />
            <button className="btn btn-success "  
            onClick={getData}>buscar</button>
        </div>
            {found?(
                <div className="found_card">
                    <h1>{found.id}</h1>
                    <h1>{found.name}</h1>
                    <p>{found.location}</p>
                    <p>{found.mode}</p>
                </div>
            ):null}
        </div>
    )
}

export default Find
