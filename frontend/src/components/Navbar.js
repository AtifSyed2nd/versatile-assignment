import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.freepnglogos.com/uploads/vs-png/vintage-vs-with-black-lines-png-transparent-Images-12.png"
            // src="https://visionarybizz.com/images/vs_logo.webp"
            alt="Bootstrap"
            width="100"
          />
          {/* Visionary Services */}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse d-flex navbar-collapse justify-content-between mx-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">
                Home
              </a> */}
              {/* <Link className="nav-link" to='/'>Home</Link> */}
            </li>
            
            <li className="nav-item">
              {/* <a className="nav-link" href="/id">
                Product
              </a> */}
              {/* <Link to='/'>Product</Link> */}

            </li>
          </ul>
          <a className="nav-link" href="/add">
              <button className="btn btn-outline-success">Add <b className="fs-4">+</b> </button>
              </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
