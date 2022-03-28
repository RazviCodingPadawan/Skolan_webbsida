import React from "react";
import Detail from "./Detail";

function Card(props) {
  return (
      <div>
        <div className="card">
        <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="Personal_bild" />
      </div>


      <div className="bottom">
        <div className="info">{props.tel} </div>
        <div className="info">{props.email} </div>
        <Detail kontonr= {props.kontonr} />
     </div>
    
    </div>
    </div>
  );
}

export default Card