import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

function Form() {
  return (
    <form>
      <label>
        Username:
        <input type="text" onChange={event => {}} />
        <select>
          <option>bill</option>
          <option>will</option>
          <option>still</option>
          <option>thrill</option>
        </select>
      </label>
      <button onSubmit={e => {}}>Submit!</button>
    </form>
  );
}

export default Form;
