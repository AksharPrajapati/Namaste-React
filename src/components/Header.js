import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginState, setLoginState] = useState("LogIn");
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="navbar-container">
        <ul className="navbar-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
