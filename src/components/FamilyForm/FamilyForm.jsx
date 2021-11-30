import React,{ useState, useEffect } from 'react'
import {createFamily} from "../../api/fetch_family"
import {getHabitat} from "../../api/fetch_habitat"
import "./FamilyForm.css"

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
        <div className="familyForm-container">
        <form onSubmit={submitForm} className="familyForm">
            <input class="form-control familyForm_item" id="formGroupExampleInput"
            type="number" min="1"
            name="id"
            value={familyForm.id}
            onChange={handleInput} 
            id="floatingInput" 
            placeholder="numero de id"/>
            <input class="form-control familyForm_item" id="formGroupExampleInput"
            type="text"
            name="name"
            value={familyForm.name}
            onChange={handleInput}
            id="floatingInput" 
            placeholder="nombre"/>
            <select  class="form-select familyForm_item" name="family"
            name="habitat" onClick={handleInput}>
            {option.map((habitat)=>(
                <option 
                value={habitat._id} 
                >{habitat.name}</option>
            ))}
            </select>
            <div className="checkbox-and-button">
              <div className="checkbox-container">
                <input 
                type="checkbox"
                name="livingInGroup"
                onChange={handleInput}
                id="floatingInput" />
                <label class="form-check-label" for="exampleCheck1">¿vive en grupo?
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-secondary animalForm_item">añadir</button>
            {error && <div style={{ color: "red" }}>{error}</div>}
            </form>
        </div>
    )
}

export default FamilyForm
