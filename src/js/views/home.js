import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context);
	return (
		<div className="text-center mt-5">
			<h1>People</h1>
			{store.people.map((person, index) => {
				return (
					<PersonCard key={person.uid} person={person} />
				)
			})}
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
