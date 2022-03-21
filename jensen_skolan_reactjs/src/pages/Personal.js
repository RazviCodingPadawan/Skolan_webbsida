import React from "react";
import Card from "../components/Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img src={contact.img}
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
}

export {Personal}
