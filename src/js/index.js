//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(() => {
    ReactDOM.render(<Home 
        one = {Math.floor((counter)%10)}
        two = {Math.floor((counter/10)%10)}
        three = {Math.floor((counter/100)%10)}
        four = {Math.floor((counter/1000)%10)}
        five = {Math.floor((counter/10000)%10)}
        six = {Math.floor((counter/100000)%10)}
        seven = {Math.floor((counter/1000000)%10)}
        eight = {Math.floor((counter/10000000)%10)}
        />, document.querySelector("#app"));
        counter++
    
}, 1000);