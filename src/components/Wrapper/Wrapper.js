import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="row"><div id="myBox">{props.children}</div></div>;

export default Wrapper;
