import React, { useContext } from "react";
import "../../styles/home.css";
import { PeopleSlider } from "../component/PeopleSlider";
import { PlanetsSlider } from "../component/PlanetsSlider";
import { StarshipsSlider } from "../component/StarshipsSlider";


export const Home = () => {
	return (
		<div  className="cardDiv text-center mt-5 d-flex flex-column w-100 align-items-center ">
			<h2>People</h2>
				<PeopleSlider />
			<h2>Panets</h2>
				<PlanetsSlider />
			<h2>Starships</h2>
				<StarshipsSlider />
		</div>
	);
};
