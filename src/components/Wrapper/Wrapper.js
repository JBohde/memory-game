import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="container"><div id="myBox">{props.children}</div></div>;

export default Wrapper;
