import React, { useEffect, useState } from "react"; //
import { useNavigate } from "react-router-dom";
import girlpic from "../images/girl.jpeg";
import boypic from "../images/boy.jpeg";
// import 2 more photots aur neeche profice dikhate so jaga if operations use kARKO male female oic display kara

const About = () => {
  const history = useNavigate();
  const [userData, serUserData] = useState({});

  const callAboutpage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      serUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);

      history("/login");
      // window.alert("login madi");
    }
  };

  useEffect(() => {
    callAboutpage();
  }, []);

  return (
    <>
      <section className="h-100 background-radial-gradient overflow-hidden">
        <form method="GET" class="row" id="about1">
          <div class="container">
            <div class="row">
              <div class=" ssss col-md-4 motapa1 bg-glass text-center lambai1">
                {" "}
                <img
                  className="rounded-circle "
                  id="malefemale"
                  src={userData.gender==="male" ? boypic : girlpic }
                  alt="khmr"
                />
              </div>
              <div class="col-md-4 motapa2  bg-glass lambai2" id="coloumn2">
                <h1> <b>
              Name </b> </h1>
                <h2>{userData.name}</h2>
                <h6>{userData.work}</h6>
              </div>
            </div>
            {/* <!-- <div class="col-md-4 sam">..</div> --> */}

            <div class="row">
              <div class="col-md-4 motapa1 bg-glass lambai1">
                {/* <hr> */}
                <h1> <strong>Work  Link</strong></h1>
                <a href="#https://www.google.com/" target="_khameer">
                  {" "}
                  khmr{" "}
                </a>
                <br />
                <a href="#https://www.google.com/" target="_khameer">
                  {" "}
                  khmr{" "}
                </a>
                <br />
                <a href="#https://www.google.com/" target="_khameer">
                  {" "}
                  khmr{" "}
                </a>
                <br />
                <a href="#https://www.google.com/" target="_khameer">
                  {" "}
                  khmr{" "}
                </a>
                <br />
                <a href="#https://www.google.com/" target="_khameer">
                  {" "}
                  khmr{" "}
                </a>
                <br />
              </div>
              <div class="col-md-4 bg-glass motapa2 lambai2">
                {/* <hr> */}
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      //aria-selected="home"
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      //aria-selected="profile"
                    >
                      timeline
                    </a>
                  </li>
                </ul>
                <br />
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6 sizediya">
                        <label> <b>Id</b></label>
                      </div>
                      <div class="col-md-6">
                        <p> : {userData._id}</p>
                      </div>
                    </div>

                    <div class="row ">
                      <div class="col-md-6 sizediya">
                        <label> <b>Name</b></label>
                      </div>
                      <div class="col-md-6">
                        <p> : {userData.name}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 sizediya">
                        <label> <b>Email</b></label>
                      </div>
                      <div class="col-md-6">
                        <p> : {userData.email}</p>
                      </div>
                    </div>

                    <div class="row ">
                      <div class="col-md-6 sizediya">
                        <label> <b>Work/Course</b></label>
                      </div>
                      <div class="col-md-6">
                        <p> : {userData.work}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 sizediya">
                        <label> <b>Gender</b> </label>
                      </div>
                      <div class="col-md-6">
                        <p> : {userData.gender}</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- {/* yahanse nav tab timeline aur about ka isme timeline wala ye */}
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label> time linr id</label>
                      </div>
                      <div class="col-md-6">
                        <p>98744567</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <label> timeline id</label>
                      </div>
                      <div class="col-md-6">
                        <p>98744567</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <label> uttr id</label>
                      </div>
                      <div class="col-md-6">
                        <p>98744567</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <label> ustter id</label>
                      </div>
                      <div class="col-md-6">
                        <p>98744567</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <label> ustter id</label>
                      </div>
                      <div class="col-md-6">
                        <p>98744567</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default About;
