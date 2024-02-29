import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { PersonCard } from "../component/PersonCard";
import { CaroselSlider } from "../component/CaroselSlider";


export const Home = () => {
	return (
		<div  className="cardDiv text-center mt-5 d-flex flex-column w-100 align-items-center ">
			<h2>People</h2>
				<CaroselSlider />
			<h2>Panets</h2>
		</div>
	);
};
