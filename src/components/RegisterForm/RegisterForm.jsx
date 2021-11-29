import React, { useState } from "react";
import { registerUser } from "../../api/fetch_user";
import "./RegisterForm.css";
import { Link,useHistory } from "react-router-dom";

const INITIAL_STATE = {
  email: "",
  name: "",
};
const RegisterForm = (props) => {
  const history = useHistory();
  const [registerForm, setRegisterForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(registerForm);
      setRegisterForm(INITIAL_STATE);
      setError("");
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  return (
      <div class="form-floating">
        <Link to="/">
          <a className="go-back-home" >«««Atras«««</a>
        </Link>
        <form onSubmit={submitForm} className="registerForm">
          <input 
          type="text"
          name="name"
          value={registerForm.name}
          onChange={handleInput}
          placeholder="name"
          className="register-input" 
          id="floatingInput" 
          placeholder="Name"/>
          <input 
          type="email"
          name="email"
          value={registerForm.email}
          onChange={handleInput}
          placeholder="E-mail"
          onChange={handleInput}
          className="register-input" 
          id="floatingInput" 
          placeholder="Email"/>
          <input 
          type="password"
          name="password"
          value={registerForm.password}
          onChange={handleInput}
          placeholder="Password"
          className="register-input" 
          id="floatingInput" 
          placeholder="Password"/>
          <button className="register-button" type="submit">Register</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </div>
  );
};

export default RegisterForm;
