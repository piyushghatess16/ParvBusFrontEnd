import { Link, Switch, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./SignUp";
function Navbar() {
  var navigate = useNavigate();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          PARV BUSES
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <Link to="/">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
            </Link>
            <Link to="/mineQuotes">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  My Quotes
                </a>
              </li>
            </Link>

            <Link to="/myQuotes">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  All Quotes
                </a>
              </li>
            </Link>

            <Link to="/signup">
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Sign Up
                </a>
              </li>
            </Link>
            <Link to="/login">
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Login
                </a>
              </li>
            </Link>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button

              class="btn btn-outline-danger my-2 my-sm-0"
              type="submit">
              Log Out
            </button>
          </form>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" Component={Login}></Route>
        <Route exact path="/register" Component={Signup}></Route>
        {/* <Route exact path="/myQuotes" Component={myQuotes}></Route>
        <Route exact path="/addquote" Component={AddQuote}></Route>
        <Route exact path="/mineQuotes" Component={MineQuotes}></Route>
        <Route exact path="/" Component={SignUp}></Route> */}
      </Routes>
    </div>
  );
}

export default Navbar;