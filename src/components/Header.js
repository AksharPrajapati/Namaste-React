import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginState, setLoginState] = useState("LogIn");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex items-center justify-between bg-orange-500 px-5">
      <div className="">
        <img src={LOGO_URL} alt="logo" className="w-40" />
      </div>
      <div className="">
        <ul className="flex gap-6">
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
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
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
