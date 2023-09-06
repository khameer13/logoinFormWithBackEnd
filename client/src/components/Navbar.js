import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logo from "../images/thirteennetwork.jpeg";
import { userContext } from "../App";

const Navbar = () => {
  const { state  } = useContext(userContext);   
  // ,dipatch nikala  warning aara bolko state ke baju tha so same kara login logout and navbar me
  const RenderMenu = () => {
  
    if (state) {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link " to="/">
              Home{" "}
            </NavLink>
          </li>

          {/* <li className="nav-item">
    <NavLink className="nav-link" to="/login">Login</NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/signup">Signup</NavLink>
  </li> */}

          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About/profile
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          {/* <li className="nav-item active">
            <NavLink className="nav-link " to="/">
              Home{" "}
            </NavLink>
          </li> */}

          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
{/* 
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About/profile
            </NavLink>
          </li> */}

          {/* <li className="nav-item">
    <NavLink className="nav-link" to="/logout">logout</NavLink>
  </li> */}
        </>
      );
    }
    <>

    </>
  };
  return (
    <>
      {/* navbar styling is in app.css file where a represents all components */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" href="/">
          <img id="navlogo" src={logo} alt="thirteen" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav h3 ms-auto">
            <RenderMenu />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
