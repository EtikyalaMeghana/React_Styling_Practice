//Create a React app from scratch.
import React from "react";
import reactDom from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.

const dt = new Date(2019, 1, 1, 12).getHours();
console.log(dt);
let txt;
var custstyle = {
  color: "",
};

if (dt < 12) {
  txt = "Good Morning";
  custstyle.color = "red";
} else if (dt < 18) {
  txt = "Good Afternoon";
  custstyle.color = "green";
} else {
  txt = "Good Evening";
  custstyle.color = "blue";
}
reactDom.render(
  <h1 className="heading" style={custstyle}>
    {txt}
  </h1>,
  document.getElementById("root")
);
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
