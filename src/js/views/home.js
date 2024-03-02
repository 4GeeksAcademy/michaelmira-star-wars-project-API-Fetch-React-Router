import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { PersonCard } from "../component/PersonCard";
import { PeopleSlider } from "../component/PeopleSlider";
import { PlanetsSlider } from "../component/PlanetsSlider";


export const Home = () => {
	return (
		<div  className="cardDiv text-center mt-5 d-flex flex-column w-100 align-items-center ">
			<h2>People</h2>
				<PeopleSlider />
			<h2>Panets</h2>
				<PlanetsSlider />
			<h2>Starships</h2>
			
		</div>
	);
};
