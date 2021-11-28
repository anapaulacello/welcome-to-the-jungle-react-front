import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {createFamily} from "../../api/fetch_family"
import {getHabitat} from "../../api/fetch_habitat"

const INITIAL_STATE = {
    id: "",
    name: "",
    livingInGroup:null,
    habitat:"",
  };

const FamilyForm = () => {
    const [familyForm, setFamilyForm] = useState(INITIAL_STATE);
    const [error, setError] = useState(null);
    const [option, setOption] = useState([]);

    const getData=async()=>{
        try {
            const {data}=await getHabitat();
            setOption(data.habitats)
        } catch (error) {
            setError(error);
        }
    }
    useEffect(async () => {
        getData();
      }, []);

    const submitForm=async(e)=>{
    e.preventDefault();
    setError("");
    console.log(JSON.stringify(familyForm));
    try {
        await createFamily(familyForm);
        setFamilyForm(INITIAL_STATE);
        setError("");
        } catch (error) {
        setError(error.message);
        }
    }

    const handleInput = (e) => {
        let { name, value } = e.target;
        if(value =="on"){
          value=true
        }
        else if(value ==null){
          value = false
        }
        setFamilyForm({ ...familyForm, [name]: value });
      };
    return (
        <div>
        <form onSubmit={submitForm} className="familyForm">
            <input 
            type="text"
            name="id"
            value={familyForm.id}
            onChange={handleInput} 
            id="floatingInput" 
            placeholder="id"/>
            <input 
            type="text"
            name="name"
            value={familyForm.name}
            onChange={handleInput}
            id="floatingInput" 
            placeholder="name"/>
            <input 
            type="checkbox"
            name="livingInGroup"
            onChange={handleInput}
            id="floatingInput" />
            <select  name="habitat" onClick={handleInput}>
            {option.map((habitat)=>(
                <option 
                value={habitat._id} 
                >{habitat.name}</option>
            ))}
            </select>
            <button type="submit">Register</button>
            {error && <div style={{ color: "red" }}>{error}</div>}
            </form>
            <Link to="/newHabitat">crear nuevo habitat</Link>
        </div>
    )
}

export default FamilyForm
