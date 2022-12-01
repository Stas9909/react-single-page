import React from "react";
import Navbar from "./Navbar";
import "./Main.css";

const Main = (props) => {
    return(
      <main>
        <Navbar className="Navbar"/>
        {/* {props.children} */}
      </main>
    )
}

export default Main;