import React, {useState, Fragment} from 'react'
import { nanoid } from "nanoid";
import data from './personal-data.json'
import '../components/Personal.css';
import VisaPersonal from "../components/VisaPersonal";
import EditPersonal from "../components/EditPersonal";


//hämtar alla kontakter från personalata och visar inputs där man kan skriva nåt, 
//addFormData lägger till contacts
const Personal = ()=> {
  const [contacts, setContacts]= useState(data);
  const [addFormData, setAddFormData]= useState({
    firstName:"",
    email:"",
    phone:"",
    kontonr:"",
  });
 
//edit form, när du trycker på edit kommer denna fram
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    kontonr: "",
  });
 
//ger ny rad när man trycker på edit
  const [editContactId, setEditContactId] = useState(null);
   
 
  //eventhandler till form, lägger till lärare,  genom feildName="name" , knappen add
  const handleAddFormChange =(event)=>{
    event.preventDefault();

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

//när man ändrar nåt, på samma sätt som add
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };


//skapar nya kontakter , lägger till en ny rad
  const handleAddFormSubmit = (event)=>{
    event.preventDefault();

    const newContact ={
        id:nanoid(),
        firstName:addFormData.firstName,
        email:addFormData.email,
        phone:addFormData.phone,
        kontonr:addFormData.kontonr,
    }
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  }
 
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      email: editFormData.email,
      phone: editFormData.phone,
      kontonr: editFormData.kontonr,
    };

    const newContacts = [...contacts];
   //index hämtar värdet av raden vi vill ändra
    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
    
  };
 //togglebtn mellan update och save (Fragment)
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      firstName: contact.firstName,
      email: contact.email,
      phone: contact.phone,
      kontonr: contact.kontonr,
    };

    setEditFormData(formValues);
    
  };
//cancel knapp
  const handleCancelClick = () => {
    setEditContactId(null);
  };
//delete knapp
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  
   /*form för att lägga till lärare*/
    return (
      <div className="contact-card">
      
   
    <form onSubmit={handleAddFormSubmit}>
    <h2 className='namn'>Lägg Till Lärare</h2>
      <input type="text"
              name="firstName"
              required="required"
              placeholder="Namn..."
              onChange={handleAddFormChange}/>
      <input type="email"
              name="email"
              required="required"
              placeholder="Email..."
              onChange={handleAddFormChange}/>  
      <input type="text"
              name="phone"
              required="required"
              placeholder="Phone..."
              onChange={handleAddFormChange}/>  
      <input type="text"
              name="kontonr"
              required="required"
              placeholder="Kontonr..."
              onChange={handleAddFormChange}/> 
              <button className='formbtn' type="submit" >Add</button> 
             
    </form>
   
    <form className="card" onSubmit={handleEditFormSubmit}>

          <tbody>
            {contacts.map((contact) => (
              //mapar igenom contactsdata så vi får fler rader
              //togle mellen edit och save
              //turnery operator
              <Fragment> 
                {editContactId === contact.id ? (
                  <EditPersonal
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                /*contacts from PersonalData, i egen fil */
                  <VisaPersonal
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        
      </form>
     
    </div>
  );
}

 export {Personal}
