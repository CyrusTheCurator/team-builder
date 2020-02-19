import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

function Form(props) {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {
    if (props.memberToEdit) {
      setNewMember(props.memberToEdit);
      console.log("hey guys, we are now editing ", newMember);
    }
  }, [props.memberToEdit]);

  const submitHandler = event => {
    console.log("adding new member: ", newMember);
    if (newMember.name != "" && newMember.email != "" && newMember.role != "") {
      props.addTeamMember(newMember);
    }
    event.preventDefault();
  };

  const onInputChange = event => {
    // console.log`name is currently ${nameInput.value} email is currently ${emailInput.value} role is currently${roleInput.value}`();

    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor>
        Name:
        <input
          type="text"
          name="name"
          id="nameInput"
          placeholder={newMember.name}
          onChange={onInputChange}
          value={newMember.name}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          id="emailInput"
          placeholder={newMember.email}
          onChange={onInputChange}
          value={newMember.email}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          id="roleInput"
          placeholder={newMember.role}
          onChange={onInputChange}
          value={newMember.role}
        />
      </label>

      <button onSubmit={e => {}}>Save Team Member</button>
    </form>
  );
}

export default Form;
