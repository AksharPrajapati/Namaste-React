import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginState, setLoginState] = useState("LogIn");
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="navbar-container">
        <ul className="navbar-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() =>
              setLoginState(loginState === "LogIn" ? "LogOut" : "LogIn")
            }
          >
            {loginState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
