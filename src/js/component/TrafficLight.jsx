import React, { useState } from "react";
import "../../styles/index.css"; 

const TrafficLight = () => {
    const [redLight, setRedLight] = useState("bg-danger");
    const [yellowLight, setYellowLight] = useState("bg-warning");
    const [greenLight, setGreenLight] = useState("bg-success");
    
    const turnon1 = () => {
        if (redLight === "bg-danger") {
            setRedLight("bg-danger shine"); 
            setYellowLight("bg-warning");
            setGreenLight("bg-success");
        } else {
            setRedLight("bg-danger");
        }
    };

    const turnon2 = () => {
        if (yellowLight === "bg-warning") {
            setYellowLight("bg-warning shine"); 
            setRedLight("bg-danger");
            setGreenLight("bg-success");
        } else {
            setYellowLight("bg-warning");
        }
    };

    const turnon3 = () => {
        if (greenLight === "bg-success") {
            setGreenLight("bg-success shine");
            setRedLight("bg-danger");
            setYellowLight("bg-warning");
        } else {
            setGreenLight("bg-success");
        }
    };

    return (
        <div className="container bg-dark d-flex justify-content-evenly flex-column rounded" style={{height: "580px", width: "200px", paddingLeft: "32px", marginTop: "150px"}}>
            <div className={`rounded-circle ${redLight}`} style={{width: "140px", height: "120px", cursor: "pointer"}} onClick={turnon1}></div>
            <div className={`rounded-circle ${yellowLight}`} style={{width: "140px", height: "120px", cursor: "pointer"}} onClick={turnon2}></div>
            <div className={`rounded-circle ${greenLight}`} style={{width: "140px", height: "120px", cursor: "pointer"}} onClick={turnon3}></div>
        </div>
    );
};

export default TrafficLight;
