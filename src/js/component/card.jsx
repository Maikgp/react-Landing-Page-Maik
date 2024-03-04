import React from "react";

 export const Card = (props) => {
    console.log("Card component");

  
    return (
        <div className="card my-2" style={{ width: "18rem" }}>
            <img src={props.image} className="card-img-top" alt="card" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.paragraph}</p>
                <a href="#" className="btn btn-primary custom-btn">Find Out More!</a>
            </div>
        </div>
    )
};