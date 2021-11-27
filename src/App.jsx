import { Link, Route,Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import React,{useState} from "react";
import {Home, Animals} from "./pages"
import { LoginForm } from "./components";

export const UserContext=React.createContext(null);

function App() {
  const[user,setUser]=useState(null)
  const authenticated = user != null;

  const saveUser=(user)=>{
    setUser(user);
    console.log('estado del usuario',user)
  }
  return (
      <Router>
      <UserContext.Provider value={{user,saveUser}}>
        <Link to="/">
            <a>Home</a>
        </Link>
        <Link to="/animals">
          <a >Animals</a>
        </Link>
        <Link to="/login">
          <a >Login</a>
        </Link>
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route exact path="/" component={Home} />
          <Route path="/animals" component={Animals} />
        </Switch>
        </UserContext.Provider>
      </Router>
  );
}

export default App;
