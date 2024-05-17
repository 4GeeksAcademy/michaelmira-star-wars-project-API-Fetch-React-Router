import React from "react";
import "../../styles/home.css";
import { PeopleSlider } from "../component/PeopleSlider";
import { PlanetsSlider } from "../component/PlanetsSlider";
import { StarshipsSlider } from "../component/StarshipsSlider";
import { Landing } from "../component/Landing";


export const Home = () => {
	return (
		<>
			<div> <Landing /> </div>
			<div className="cardDiv text-center d-flex flex-column w-100 align-items-center ">
				<h2 className="m-3">People</h2>
				<PeopleSlider />
				<h2 className="m-3">Panets</h2>
				<PlanetsSlider />
				<h2 className="m-3">Starships</h2>
				<StarshipsSlider />
			</div>
		</>
	);
};
