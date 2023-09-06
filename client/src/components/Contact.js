import React, { useEffect, useState } from "react";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import whatsapp from "../images/whatsapp.png";
import linkdn from "../images/linkdn.png";

const Contact = () => {
  const [userData, serUserData] = useState({name:"",email:"",phone:"",message:""});

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      serUserData({...userData,name:data.name,email:data.email,phone:data.phone});

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

//data store krne ke liye
const handleInputs=(e)=>{
  const name =e.target.name;
  const value =e.target.value;
  serUserData({...userData,[name]:value});
}
  // backend ko data bhejna 
  const contactForm=async (e)=>{
    e.preventDefault();

    const {name,email,phone,message}= userData;

   const res = await fetch('/contact',{
    method:"POST",
    headers:{
      "content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,phone,message
    })
   });
   const data= await res.json();
   if(!data){
    console.log("message not send ");
   }else{
    alert("message sent");
    serUserData({...userData,message :" "});
   }


  }



  return (
    <section className="h-100 background-radial-gradient overflow-hidden ">
      <form className="marginideru" method="POST">
        {/* <!-- Name input --> */}
        <div className="form-outline mb-4">
          <input
            type="text"
            placeholder="enter details"
            name="name"
            value={userData.name}
            onChange={handleInputs}
            id="form4Example1"
            className="form-control"
          />
          <label className="form-label text-white" htmlFor="form4Example1">
            Name
          </label>
        </div>

        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <input
            type="email"
            placeholder="enter details"
            name="email"
            value={userData.email}
            onChange={handleInputs}
            id="form4Example2"
            className="form-control"
          />
          <label className="form-label text-white" htmlFor="form4Example2">
            Email address
          </label>
        </div>

        {/* <!-- phone input --> */}
        <div className="form-outline mb-4">
          <input
            type="phone"
            placeholder="enter details"
            name="phone"
            value={userData.phone}
            onChange={handleInputs}
            id="form4Example2"
            className="form-control"
          />
          <label className="form-label text-white" htmlFor="form4Example2">
            phone no
          </label>
        </div>

        {/* <!-- Message input --> */}
        <div className="form-outline mb-4">
          <textarea
            className="form-control"
            placeholder="your suggestion/complaint"
            name="message"
            value={userData.message}
            onChange={handleInputs}
            id="form4Example3"
            rows="4"
          ></textarea>
          <label className="form-label text-white" htmlFor="form4Example3">
            Message
          </label>
        </div>

        {/* <!-- Submit button --> */}
        <button type="submit" className="btn btn-primary btn-block mb-4" onClick={contactForm}>
          Send
        </button>
        <hr id="chr"></hr>
        <div className="text-center ">
          <a className="fa" href="#">
            {" "}
            <img className="sociallogo" src={fb} alt="thirteen" />
          </a>
          <a className="fa" href="#">
            {" "}
            <img className="sociallogo" src={insta} alt="thirteen" />
          </a>
          <a className="fa" href="#">
            {" "}
            <img className="sociallogo" src={linkdn} alt="thirteen" />
          </a>
          <a className="fa" href="#">
            {" "}
            <img className="sociallogo" src={whatsapp} alt="thirteen" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
