import React from "react";
import './MainContainer.css'
 function MainContainer () {
    return(
        <div className="main">
            <div className="react-container">
                <p className="txtClass">React is an open-source JS library</p>
                <p className="txtClass">Founded by Jordan Walke</p>
                <p className="txtClass"> Release year 2013</p>
                <p className="txtClass"> Javascript</p>
                <p className="txtClass"> Dom is virtual</p>
                <p className="txtClass"> Moderate learning curve</p>
             </div>
             <div className="react-container">
             <p className="txtClass">Angular is a development framework</p>
             <p className="txtClass">Founded by Misko Hevery </p>
             <p className="txtClass"> Release year 2009</p>  
             <p className="txtClass"> Typescript</p> 
             <p className="txtClass">  Dom is real</p> 
             <p className="txtClass">  Steep learning curve</p> 
             </div>
        </div>
       
    )
}
export default MainContainer