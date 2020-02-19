import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({
    member: "",
    email: "",
    role: ""
  });

  const stateFormChange = e => {
    setState({
      ...state, [e.target.member]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <header>You are at the Team Builder!</header>
      <form onSubmit={handleSubmit}>
        <label>
          Member:
          <input
            type="text"
            name="member"
            placeholder="Enter Name "
            onChange={stateFormChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={stateFormChange}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            placeholder="Enter Role"
            onChange={stateFormChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div >
  );
}

export default App;
