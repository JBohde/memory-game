import React from "react";
import "./Navbar.css";

const Navbar = props => 
<nav className="navbar" data-spy="affix" data-offset-top="197">
    <div className="nav-item">Memory Game</div>
    <div className="nav-item">{props.message}</div>
    <div className="nav-item"><p className="card-text">Score: {props.counter} | Top Score: {props.topscore}</p></div>
</nav> 


export default Navbar;
