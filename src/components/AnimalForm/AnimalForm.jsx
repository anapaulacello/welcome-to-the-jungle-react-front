import React,{ useState,useEffect }  from 'react'
import {createAnimal} from "../../api/fetch_animals"
import{getFamily} from "../../api/fetch_family"

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
        <div>
        <form onSubmit={submitForm} className="animalForm">
          <input 
          type="text"
          name="id"
          value={animalForm.id}
          onChange={handleInput} 
          id="floatingInput" 
          placeholder="id"/>
          <input 
          type="text"
          name="name"
          value={animalForm.name}
          onChange={handleInput}
          id="floatingInput" 
          placeholder="name"/>
          <input 
          type="checkbox"
          name="isCarnivore"
          onChange={handleInput}
          id="floatingInput" />
          <select  name="family" onClick={handleInput}>
          {option.map((family)=>(
              <option 
              value={family._id} 
              >{family.name}</option>
          ))}
          </select>
          <button type="submit">Register</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </div>
    )
}

export default AnimalForm
