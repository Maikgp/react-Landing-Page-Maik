import React from "react";



//create your first component
const Home = (num) => {
	return (
		<div id="mySquare">
			<div className="square">
				<i className={"fa fa-clock"}></i>
			</div>			
			<div className="square">{num.six}</div>
			<div className="square">{num.five}</div>
			<div className="square">{num.four}</div>
			<div className="square">{num.three}</div>
			<div className="square">{num.two}</div>
			<div>,</div>
			<div className="square">{num.one}</div>
		</div>
		
		
	);
};

export default Home;