import React from "react";
import { Navbar } from "./Navbar.jsx"
import Jumbotrom from "./Jumbotrom.jsx";
import { Card } from "./card.jsx";


const Home = () => {
	const body = [
		{
			title: "First image",
			paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus at nihil molestias, saepe est, inventore eius tempora ea quae sapiente, labore cum maxime vero iure nostrum autem esse vel dolorem! sabias que cuando sueñas que te caes de un edificio es porque dejas de respirar",
			image: "https://fastly.picsum.photos/id/235/5000/3333.jpg?hmac=i9YaRj_AF62lGVYNlYhdL2gqRDxoUzypXLUXBj8ihCc"
		},
		{
			title: "Second image",
			paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus at nihil molestias, saepe est, inventore eius tempora ea quae sapiente, labore cum maxime vero iure nostrum autem esse vel dolorem! sabias que cuando sueñas que te caes de un edificio es porque dejas de respirar",
			image: "https://fastly.picsum.photos/id/227/1024/683.jpg?hmac=63Bm3-6abEba_BO4lpAKdrnmSL04wZpwK17xue1mCXw"
		},
		{
			title: "Third image",
			paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus at nihil molestias, saepe est, inventore eius tempora ea quae sapiente, labore cum maxime vero iure nostrum autem esse vel dolorem! sabias que cuando sueñas que te caes de un edificio es porque dejas de respirar",
			image: "https://fastly.picsum.photos/id/216/2500/1667.jpg?hmac=1g2BUfc8FVh32xe_jfCGso0xqyVSnIKEBJ-xpSZBTfs"
		},
		{
			title: "Fourth image",
			paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus at nihil molestias, saepe est, inventore eius tempora ea quae sapiente, labore cum maxime vero iure nostrum autem esse vel dolorem! sabias que cuando sueñas que te caes de un edificio es porque dejas de respirar",
			image: "https://fastly.picsum.photos/id/188/2896/1936.jpg?hmac=tKGI_u_jJ-s7wzHbJibhbflqi57bIpH9g7FJXnTfJao"
		}
	]

	return (
		<div>
			<Navbar />


			<div className="container">
				<Jumbotrom />
				<div className="d-flex flex-row flex-wrap justify-content-between">
					{body.map((card, index) => {
						return (<Card title={card.title} paragraph={card.paragraph} image={card.image} key={index} />)
					})
					}


				</div>
			</div>

			
		</div>
	);
};

export default Home;