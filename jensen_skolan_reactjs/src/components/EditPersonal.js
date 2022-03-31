import React from "react";
//hamnar här när jag trycker på editkappen
const EditPersonal = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <div className="form-edit">
      <td>Namn: 
        <input
          type="text"
          required="required"
          placeholder="Namn..."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td> Email: 
        <input 
           type="email"
           required="required"
           placeholder="Email..."
           name="email"
           value={editFormData.email}
           onChange={handleEditFormChange}
           ></input>
      </td>
      <td> Telnr:
        <input
          type="text"
          required="required"
          placeholder="Phone..."
          name="phone"
          value={editFormData.phone}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td> Kontonr: 
        <input
          type="text"
          required="required"
          placeholder="Kontonr..."
          name="kontonr"
          value={editFormData.kontonr}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </td>
    </div>
  );
};

export default EditPersonal;