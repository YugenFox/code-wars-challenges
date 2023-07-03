const sum = (a, b) => a + b;
// You already have a function to add two numbers
// Import necessary libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a Portfolio component
const Portfolio = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <p>Welcome to my portfolio page!</p>
      <h2>Projects</h2>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
      <h2>Contact</h2>
      <p>Email: example@example.com</p>
      <p>LinkedIn: https://linkedin.com/in/example/</p>
    </div>
  );
};

// Render the Portfolio component to the DOM
ReactDOM.render(<Portfolio />, document.getElementById("root"));

