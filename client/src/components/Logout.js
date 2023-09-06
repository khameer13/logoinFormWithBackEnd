import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from "../App";


const Logout = () => {
  const {dispatch} =useContext(userContext);
  // state,nikala  warning aara bolko state ke baju tha so  same kara login logout and navbar me
  // Promises

    const history = useNavigate();


    useEffect(()=>{
fetch('/Logout',{
    method: "GET",
    headers: {
      Accept: "appllication/json",
      "content-Type": "application/json",
    },
    credentials: "include",
}).then((res)=>{
  dispatch({type:"USER",payload:false})
    history("/login");
    if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
    }
}).catch((err)=>{
    console.log(err);
});
    });
  return (
    <>
      <h1>logout hogaya</h1>
    </>
  )
}

export default Logout
