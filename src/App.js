import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter,Route } from "react-router-dom";
import  Signup  from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import Post from "./store/PostContext";

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';

function App() {
  const  {setuser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
firebase.auth().onAuthStateChanged((user)=>{
  setuser(user)
})
  })
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/signup'>
        <Signup />
        </Route>
        <Route path='/login'>
        <Login />
        </Route>
        <Route path='/create'>
        <Create/>
        </Route>
        <Route path='/viewpost'>
        <View/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
