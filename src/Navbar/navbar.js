import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const NavBar = ()=>{
    const [isVisible, setIsVisible] = useState(false);
    return(
        <div className="top">
        <div className={`nav-list ${isVisible && "visible"}`}>
              <a href="/">Home</a>
             <a href="/AboutUs">AboutUs</a>
            <a href="/contact">Contact</a>
            </div>
         
        </div>
    );
};
export default NavBar;
