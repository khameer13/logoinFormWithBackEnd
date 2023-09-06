import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/thirteennetwork.jpeg";
import { userContext } from "../App";

const Login = () => {
  const { dispatch } = useContext(userContext);
  // state,nikala  warning aara bolko state ke baju tha so  same kara login logout and navbar me
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credintials");
    } else {
      dispatch({ type: "USER", payload: true })
      window.alert("success credintials");
      history("/");
    }
  };

  return (
    <>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-4 display-5 fw-bold ls-tight">
                Hello! I am the founder
                <br />
                <span> of thirteen network </span>
              </h1>
              <p className="mb-4  opacity-70">
                <b> A third year student at MVJ college,banglore. My major is Computer
                  Science with a focus on AI and web dev.
                  Thirteen network is a social network created and designed with
                  the purpose of creating an unofficial media outlet for students
                  at MVJ. It is intended to provide a place for students to create
                  content about their opinions and ideas for topics in the news.</b>
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form method="POST">
                    <div id="cntr">
                      <NavLink className="navbar-brand" href="/">
                        <img id="navlogo" src={logo} alt="thirteen" />
                      </NavLink>
                    </div>


                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input
                        placeholder="&#x1F464; UserName"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="form3Example3"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <input
                        placeholder="&#x1F511; Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="form3Example4"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>

                    <hr></hr>

                    <p>
                      Welcome to ThirteenNetwork! These terms and conditions outline the rules and regulations for the use of our website.
                    </p>

                    {/* <!-- Checkbox --> */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        id="form2Example33"
                        type="checkbox"

                      // checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Subscribe to our NewsLetter
                      </label>
                    </div>



                    <input
                      type="submit"
                      name="login"
                      value="signin"
                      className="btn btn-primary ms-2"
                      onClick={loginUser}
                    />


                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
