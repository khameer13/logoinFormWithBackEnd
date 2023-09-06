import React, { createContext, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import "./style.css";     
// //  style for chat app
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Error from "./components/Error";
import Footer from "./components/Footer";
import "./App.css";
import { initialState,reducer} from "../src/reducer/useReducer";

  //context api
  export const userContext = createContext();
const Routing = ()=>{
      return (
            <Routes>
            <Route path="/" element={<Home />} />
      
            <Route path="/about" element={<About />} />
      
            <Route path="/contact" element={<Contact />} />
      
            <Route path="/login" element={<Login />} />
      
            <Route path="/signup" element={<Signup />} />
      
            <Route path="/logout" element={<Logout />} />
      
            <Route path="*" element={<Error />} />
          </Routes>
      )
        }

const App = () => {
      const[state,dispatch] = useReducer(reducer,initialState)
  return (
    <>
      <userContext.Provider value={{state, dispatch}}>
        <Navbar />
     
      <Routing/>
      </userContext.Provider>
      <Footer/> 
    </>
  );
};

export default App;
