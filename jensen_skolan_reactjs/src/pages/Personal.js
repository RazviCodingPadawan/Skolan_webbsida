import '../styles/Personal.css'
import React from "react";
import Card from "../components/Card";
import contacts from '../contacts';

const Personal = () => {

function createCard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      img src={contacts.img}
      tel={contacts.phone}
      email={contacts.email}
      kontonr={contacts.kontonr}
    />
  );
}
    
    return (
        
        <div className='personal_container'>
            <div>
            <h1 className="heading">Lärare</h1>
            {contacts.map(createCard)}
            </div>
        </div>
    )
}

export {Personal}