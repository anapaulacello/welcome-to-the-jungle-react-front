import React,{ useState,useEffect }  from 'react'
import {createAnimal} from "../../api/fetch_animals"
import{getFamily} from "../../api/fetch_family"
import "./AnimalForm.css"
const INITIAL_STATE = {
    id: "",
    name: "",
    isCarnivore:null,
    family:"",
  };

const AnimalForm = () => {
    const [animalForm, setAnimalForm] = useState(INITIAL_STATE);
    const [error, setError] = useState(null);
    const [option, setOption] = useState([]);

    const getData=async()=>{
        try {
            const {data}=await getFamily();
            setOption(data.families)
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
        console.log(JSON.stringify(animalForm));
        try {
            await createAnimal(animalForm);
            setAnimalForm(INITIAL_STATE);
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
      setAnimalForm({ ...animalForm, [name]: value });
    };

    return (
        <div className="animalsForm-container">
         <form onSubmit={submitForm} className="animalForm">
          <input class="form-control animalForm_item" id="formGroupExampleInput"
          type="text"
          name="id"
          value={animalForm.id}
          onChange={handleInput} 
          id="floatingInput" 
          placeholder="id"/>
          <input class="form-control animalForm_item" id="formGroupExampleInput"
          type="text"
          name="name"
          value={animalForm.name}
          onChange={handleInput}
          id="floatingInput" 
          placeholder="name"/>
          <select class="form-select animalForm_item" name="family" onClick={handleInput}>
          {option.map((family)=>(
              <option 
              value={family._id} 
              >{family.name}</option>
          ))}
          </select>
          <div className="checkbox-and-button">
            <div className="checkbox-container">
              <input 
              class="form-check-input"  id="flexCheckDefault"
              type="checkbox"
              name="isCarnivore"
              onChange={handleInput}
              id="floatingInput"/>
              <label class="form-check-label" for="exampleCheck1">¿es carnívoro?</label>
            </div>
            <button type="submit" class="btn btn-secondary animalForm_item">Submit</button>
          </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        </form> 
      </div>
    )
}

export default AnimalForm
