import React from 'react'

const Welcome = (props) => {
  const greeting = "Hello React";
  const names = ["Lance", "Joe", "Jane"];
  const isLoggedIn = true;

  return (
    <div>
      <h1>{greeting}</h1>
      {/* <p>Welcome {names}</p> */}
      {/* <p>This is a paragraph</p> */}
      <p>
        Welcome, {" "}
        {isLoggedIn ? ("User", 
        (
          <ul>
            {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )) 
        : "Guest"}
      </p>
      <style>
        {`
        h1 {
          color: red;
        }`}
      </style>
      {/* <Welcome names={names.map((name) => (
        <p key={name}>{name}</p>
      ))}/> */}
      {/* Ternary operator */}
      {/* <p>Welcome, {isLoggedIn ? "User" : "Guest"}!</p> */}
    </div>
  )
}

export default Welcome;