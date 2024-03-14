import React, { useState } from "react";



//create your first component
const Home = () => {
	return (

		<div className="container">

			<h1>My Todo</h1>
			<ul>
				<li><input type="text" placeholder="what do you need to do?" ></input></li>
				<li>walk the dog</li>
				<li>take breasf</li>
				<li>take a food</li>
			</ul>
			<div>23 tasks</div>
		</div>
		       
	);


};



/* const [inputValue, setInputValue] = useState("")
const [todo,setTodo] = useState([])


return (
	<div className="text-center">
		<h1> My To do</h1>
		
		
	</div>
) */




export default Home;
