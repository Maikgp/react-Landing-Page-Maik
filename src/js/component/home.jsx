import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todo,setTodo] = useState([])


	return (
		<div className="text-center">
			<h1> My To do</h1>
			
		</div>
	)


};

export default Home;
