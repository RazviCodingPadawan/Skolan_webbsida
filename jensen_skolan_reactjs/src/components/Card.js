<<<<<<< HEAD
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
=======
import React from "react";
import Detail from "./Detail";

function Card(props) {
  console.log(props.img)
  return (
      <div>
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img"  src={`${props.img}`} alt="dummy-pic" />
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

export default Card;
>>>>>>> 018ffa9bfeab1bca69c2d84d31dc2dc1d3a2fcec
