import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { PersonCard } from "../component/PersonCard";

export const Home = () => {
	const {store, actions} = useContext(Context);
	return (
		<div className="text-center mt-5">
			<h2>People</h2>
			{store.people.map((person, index) => {
				return (
					<PersonCard key={person.uid} person={person} />
				)
			})}
		</div>
	);
};
