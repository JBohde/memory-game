import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="container" id="myBox">{props.children}</div>;

export default Wrapper;
