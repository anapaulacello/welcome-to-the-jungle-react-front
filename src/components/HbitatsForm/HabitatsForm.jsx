import React ,{ useState }from 'react'
import {createHabitat} from "../../api/fetch_habitat"
import "./HabitatsForm.css"

const INITIAL_STATE = {
    id: "",
    name: "",
    location:"",
    mode:"",
  };

const HabitatsForm = () => {
    const [habitatForm, setHabitatForm] = useState(INITIAL_STATE);
    const [error, setError] = useState(null);


    const submitForm=async(e)=>{
        e.preventDefault();
        setError("");
        console.log(JSON.stringify(habitatForm));
        try {
            await createHabitat(habitatForm);
            setHabitatForm(INITIAL_STATE);
            setError("");
            } catch (error) {
                setError(error.message);
            }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setHabitatForm({ ...habitatForm, [name]: value });
        
    };
    return (
        <div className="habitatForm-container">
        <form onSubmit={submitForm} className="habitatForm">
          <input class="form-control habitatForm_item" 
          type="number" min="1"
          name="id"
          value={habitatForm.id}
          onChange={handleInput}
          id="floatingInput" 
          placeholder="numero de id"/>
          <input class="form-control habitatForm_item" 
          type="text"
          name="name"
          value={habitatForm.name}
          onChange={handleInput} 
          id="floatingInput" 
          placeholder="name"/>
          <input class="form-control habitatForm_item" 
          type="text"
          name="location"
          value={habitatForm.location}
          onChange={handleInput}
          id="floatingInput" 
          placeholder="localización"/>
         <input class="form-control habitatForm_item" 
          type="text"
          name="mode"
          value={habitatForm.mode}
          onChange={handleInput}
          id="floatingInput" 
          placeholder="modo"/>
          <button 
          class="btn btn-secondary animalForm_item"
          type="submit">
          añadir</button>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </div>
    )
}

export default HabitatsForm
