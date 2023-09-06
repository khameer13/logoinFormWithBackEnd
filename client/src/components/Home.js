import React, { useEffect, useState } from "react";

const Home = () => {
  const [userName, serUserName] = useState("");

  // based on true or false value of show we will get the work done we can also check for it manually but it is of no use but in debugging we can use
  //  eg const show = true;

  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      serUserName(data.name);
      setShow(true);
      // if no data find then false hi rhta or true hoojayega


      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <section className="h-100 background-radial-gradient overflow-hidden">
      {/* <div className="mt-3">
        <h1>this is fucking home</h1>
        <h2>{userName}</h2>
        <h1> {show ? "hello buddy working fine" : "login budddy"} </h1>
      </div> */}

      <h2>{userName}</h2>
      {/* <h1> {show ? "Login Successfull  " : "Please Login "} </h1> */}
      <h1 style={{ color: show ? "White" : "yellow" }}>{show ? "Login Successful" : "Please Login"}</h1>


      {/* <div class="toppart">
    <h1> Chat Room</h1> 
    </div> */}

      {/* <div class="chatcontainer"> */}
      {/* <!-- <div class="message left">
       message left and right are created by backend along with css which is provided in csss file
      </div>
      <div class="message right">
         message left and right are created by backend along with css which is provided in csss file
      </div> --> */}
      {/* </div> */}

      {/* <!-- 3rd block hai --> */}

      {/* <div class="send">
      <form action="#" id="send-container">
        <input type="text" placeholder="Your Message..." name="messageInp"
          id="messageInp" />
        <button class="btn" type="submit"><i class="fa fa-paper-plane"></i></button>
      </form>
    </div> */}

      <div style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold", height: "500px", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
        Welcome to HOME..!
      </div>


    </section>


    // <section style={{ height: "100%", background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(173,216,230,1) 100%)" }}>
    // <h2>{userName}</h2>
    // <h1 style={{ color: show ? "green" : "red" }}>{show ? "Login Successful" : "Please Login"}</h1>

    // <div style={{ textAlign: "center", marginTop: "20px" }}>
    //   Welcome to HOME..!
    // </div>
    // </section>

  );
};

export default Home;
