//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


import "../styles/index.css";

import Home from "./component/home.jsx";


let counter = 0;
setInterval(() => {
    ReactDOM.render(<Home 
        one = {Math.floor((counter)%10)}
        two = {Math.floor((counter/10)%10)}
        three = {Math.floor((counter/100)%10)}
        four = {Math.floor((counter/1000)%10)}
        five = {Math.floor((counter/10000)%10)}
        six = {Math.floor((counter/100000)%10)}
        />, document.querySelector("#app"));
        counter++
    
}, 1000);