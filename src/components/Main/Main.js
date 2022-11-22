import React from "react";
import Navbar from "./Navbar";
import "./Main.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Section from "./Section";


  
const Main = () => {
    return(
      <main>
        {/* <Routes>
            <Route path="/searching" element={<Section/>}/>          
        </Routes> */}
        <Navbar className="Navbar"/>
      </main>
    )
}

// const Main = (props) => {
//     return(
//       <main>
//         {props.children}
//       </main>
//     )
// }

export default Main;