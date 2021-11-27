import './App.css';
import { Link, Route,Switch, BrowserRouter as Router } from "react-router-dom";
import React,{useState} from "react";
import {Home, Animals} from "./pages"
import { LoginForm, RegisterForm,AuthRoute} from "./components";
import Navbar from "./core/Navbar"
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
      {user?(
        <Navbar></Navbar>
        ):null}
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <AuthRoute
          authenticated={authenticated}
          path="/"
          render={(props) => <Home user={user} {...props} />} 
          ></AuthRoute> 
          <AuthRoute
          authenticated={authenticated}
          path="/animals"
          render={(props) => <Animals user={user} {...props} />} 
          ></AuthRoute>
{/*           <Route path="/" component={Home}></Route>
          <Route path="/animals" component={Animals}></Route> */}
        </Switch>
        </UserContext.Provider>
      </Router>
  );
}

export default App;
