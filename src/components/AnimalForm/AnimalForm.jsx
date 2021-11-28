import React,{ useState,useEffect }  from 'react'
import {createAnimal,getAnimal} from "../../api/fetch_animals"


const INITIAL_STATE = {
    id: "",
    name: "",
    isCarnivore:false,
    family:"",
  };

const AnimalForm = (props) => {
    const [animalForm, setAnimalForm] = useState(INITIAL_STATE);
    const [error, setError] = useState(null);
    const [family, setFamily]=useState(false)
    const [items, setItems] = useState([]);

    const getData=async()=>{
        try {
            const {data}=await getAnimal();
            setItems(data.animal)
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

    const handleSelect=(family)=>{
        setFamily(family)
        setAnimalForm({...animalForm, family})
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
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
          value={false}
          onChange={handleSelect}
          id="floatingInput" />
          <select  name="family">
          {items.map((element)=>(
              <option 
              value={element._id} 
              onChange={handleSelect}>{element.family.name}</option>
          ))}
          </select>
          <button type="submit">Register</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </div>
    )
}

export default AnimalForm
