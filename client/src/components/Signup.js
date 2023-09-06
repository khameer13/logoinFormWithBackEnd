import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import singuppic from "../images/photo.jpg";

const Signup = () => {
  const history = useNavigate(); //useHistory replaced in new version
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    gender:"",
    password: "",
    cpassword: "",
    
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work,gender, password, cpassword } = user; //object destructuring else use user.name

    //fetch is a beginer friendly api no need to install any modules for this api
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      // converting json to string as server doesnt understand json
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        gender,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("invalid reg fail");
      console.log("invalid reg fail");
    } else {
      window.alert("reg success");
      console.log(" reg sucess");

      history("/login");
    }
  };

  return (
    <>
      <section className="h-100 background-radial-gradient overflow-hidden">
        <div className="container py-5  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col ">
              <div className="card bg-glass card-registration  my-4">
                <div className="row  g-0">
                  {/* yahanse bg */}

                  {/* 
                  <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
      <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div> */}

                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src={singuppic}
                      alt="Samplephoto"
                      className="img-fluid "
                    />
                    {/* // style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" /> */}
                  </div>
                  <div className="col-xl-6 ">
                    {/* DEKHLE */}
                    <div method="POST" className="card-body p-md-5 text-black ">
                      <h3 className="mb-5 text-uppercase">Social network</h3>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              placeholder="&#x1F464; UserName"
                              type="text"
                              value={user.name}
                              name="name"
                              onChange={handleInputs}
                              id="form3Example1m"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Example1m">
                              NAME
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              placeholder="&#x1F464; OtherName"
                              type="text"
                             
                              id="form3Example1n"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Example1n">
                              EKE-NAME
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1m1">Mother's name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n1">Father's name</label>
                    </div>
                  </div>
                </div> */}

                      {/* <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 className="mb-0 me-4">Gender: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="option2"
                          />
                          <label className="form-check-label" for="maleGender">
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="option3"
                          />
                          <label className="form-check-label" for="otherGender">
                            Other
                          </label>
                        </div>
                      </div> */}

                      {/* <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example8"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example8">
                          Something about you
                        </label>
                      </div> */}

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          placeholder="&#9993; Email"
                          id="form3Example97"
                          value={user.email}
                          onChange={handleInputs}
                          name="email"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example97">
                          Email ID
                        </label>
                      </div>

                      {/* <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example90"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example90">
                          Pincode
                        </label>
                      </div> */}

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          placeholder="&#128222; Mobile-NO"
                          id="form3Example99"
                          value={user.phone}
                          onChange={handleInputs}
                          name="phone"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example99">
                          PHONE
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          placeholder=" &#x1F393; Designation"
                          id="form3Example99"
                          value={user.work}
                          onChange={handleInputs}
                          name="work"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example99">
                          Course/Work
                        </label>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <select className="select">
                            <option value="0">Semester</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                          </select>
                        </div>

                        <div className="col-md-6 mb-4">
                          <select className="state"  value={user.gender}
                              name="gender"
                              onChange={handleInputs}>
                            <option value="0">Gender</option>
                            <option >
                              male
                            </option>
                            <option >
                              female
                            </option>
                          </select>
                        </div>

                        {/* <div className="col-md-6 mb-4">
                          <select className="state">
                            <option value="0">SECTION</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                          </select>
                        </div> */}
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              placeholder="&#x1F511; Password"
                              type="text"
                              id="form3Example1m"
                              value={user.password}
                              onChange={handleInputs}
                              name="password"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Example1m">
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              placeholder="&#x1F511; Confirm Password"
                              type="text"
                              id="form3Example1n"
                              value={user.cpassword}
                              onChange={handleInputs}
                              name="cpassword"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Example1n">
                              Confirm Password
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* <div classNameName="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example97"
                          classNameName="form-control form-control-lg"
                        />
                        <label classNameName="form-label" for="form3Example97">
                          Email ID
                        </label>
                      </div> */}

                      <div className="d-flex justify-content-end pt-3">
                        {/* <button type="button" classNameName="btn btn-light btn-lg">
                          Reset all
                        </button> */}
                        <input
                          type="submit"
                          name="signup"
                          value="Register"
                          className="btn btn-primary ms-2"
                          onClick={PostData}
                        />
                        {/* subit */}
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
