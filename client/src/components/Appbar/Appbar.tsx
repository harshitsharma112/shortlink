import React from "react";

import "./Appbar.css";
import useAuth from "../../util/useAuth";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Services/authServices";


const Appbar = () => {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();
  return (
    <div className="appbar">
      <div className="appbar__inner">
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo1.jpg`} alt="" />

        <div className="appbar__menus">
          <Link className="active" to="/"  style={{marginLeft:20, marginRight:10, marginTop:12, fontSize:20, fontFamily:"sans-serif"}}>
          Dashboard{" "}
           
          </Link>
          <Link to="/profile" style={{marginLeft:20, marginRight:20, marginTop:12, fontSize:20, fontFamily:"sans-serif"}}>Profile</Link>

          {isLoggedIn ? (
            <Button
              label="logout"
              variant="outlined-secondary"
              onClick={() => logout(navigate)}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
