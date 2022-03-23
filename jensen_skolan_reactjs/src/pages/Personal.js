<<<<<<< HEAD
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
=======
import React from "react";
import Card from "../components/Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.img}
      tel={contact.phone}
      email={contact.email}
      kontonr={contact.kontonr}
    />
  );
}

function Personal() {
  return (
    <div>
      <h1 className="heading">Lärare</h1>
      {contacts.map(createCard)}

    </div>
  );
>>>>>>> 018ffa9bfeab1bca69c2d84d31dc2dc1d3a2fcec
}

export {Personal}
