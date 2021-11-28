import './App.css';
import { Route,Switch, BrowserRouter as Router } from "react-router-dom";
import React,{useState} from "react";
import {Home, Animals, Habitats,New} from "./pages"
import { LoginForm, RegisterForm,AuthRoute, FamilyForm, HabitatsForm} from "./components";
import Navbar from "./core/Navbar"

export const UserContext=React.createContext(null);

function App() {
  const[user,setUser]=useState(null)


  const saveUser=(user)=>{
    setUser(user);
    console.log('estado del usuario',user)
  }     

  const authenticated = user != null;
  console.log("auth",authenticated)
  return (
    <Router>
      <UserContext.Provider value={{user,saveUser}}>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/register" component={RegisterForm}/>
          <AuthRoute
              authenticated={authenticated}
              path="/animals"
              render={(props) => <Animals user={user} {...props} />}
            />
          <AuthRoute
              authenticated={authenticated}
              path="/habitats"
              render={(props) => <Habitats user={user} {...props} />}
            />
            <AuthRoute
              authenticated={authenticated}
              path="/new"
              render={(props) => <New user={user} {...props} />}
            />
            <AuthRoute
              authenticated={authenticated}
              path="/newFamily"
              render={(props) => <FamilyForm user={user} {...props} />}
            />
            <AuthRoute
              authenticated={authenticated}
              path="/newHabitat"
              render={(props) => <HabitatsForm user={user} {...props} />}
            />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
