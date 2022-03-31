import React from "react";
//hämtar contacts från personal-data , edit och delete knappar
//td är body för table
const VisaPersonal = ({ contact,index, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={index} className="form-edit">
     
       <td>Namn: {contact.firstName}</td> 
        <td>Email: {contact.email}</td>
        <td>Telnr: {contact.phone}</td>
        <td>Kontonr: {contact.kontonr}</td>
        <td>

        <button type="button"
          onClick={(event) => handleEditClick(event, contact)}>Edit
        </button>
        
        <button type="button" onClick={() => handleDeleteClick(contact.id)}> Delete
        </button>
      </td>
    </tr>
  );
};

export default VisaPersonal;