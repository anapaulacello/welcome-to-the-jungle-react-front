import React ,{ useState }from 'react'
import {createHabitat} from "../../api/fetch_habitat"

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
        <div>
        xasxasz
        <form onSubmit={submitForm} className="habitatForm">
          <input 
          type="text"
          name="id"
          value={habitatForm.id}
          onChange={handleInput}
          id="floatingInput" 
          placeholder="id"/>
          <input 
          type="text"
          name="name"
          value={habitatForm.name}
          onChange={handleInput} 
          id="floatingInput" 
          placeholder="name"/>
          <input 
          type="text"
          name="location"
          value={habitatForm.location}
          onChange={handleInput}
          id="floatingInput" 
          placeholder="location"/>
         <input 
          type="text"
          name="mode"
          value={habitatForm.mode}
          onChange={handleInput}
          id="floatingInput" 
          placeholder="mode"/>
          <button className="register-button" type="submit">Register</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </div>
    )
}

export default HabitatsForm
