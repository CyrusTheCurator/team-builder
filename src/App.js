import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import data from "./data";

import "./App.css";
function App() {
  const [savedTeam, setSavedTeam] = useState(data);
  const [memberToEdit, setMemberToEdit] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {}, []);

  const addTeamMember = memberDetails => {
    setSavedTeam([...savedTeam, memberDetails]);
  };

  return (
    <div className="App">
      <h3>Enter new team member details and click submit</h3>
      <Form
        addTeamMember={addTeamMember}
        memberToEdit={memberToEdit}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <div>
        <h1>Saved Members</h1>
        {savedTeam.map(element => {
          console.log(element);
          return (
            <div>
              <h2>name: {element.name}</h2>, <h2>email: {element.email}</h2>,{" "}
              <h2>role: {element.role}</h2>
              <button
                onClick={() => {
                  console.log("clicked");
                  setIsEditing(true);
                  setMemberToEdit(element);
                }}
              >
                Edit User
              </button>
              <br />
              ________________________________________________________________________
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
