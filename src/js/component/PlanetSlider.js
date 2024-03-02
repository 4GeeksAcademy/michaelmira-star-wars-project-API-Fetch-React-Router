import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { PlanetCard } from "./PlanetCard";

export const PlanetSlider = () => {
    const { store } = useContext(Context);

	return (
		<React.Fragment>
            <div  id="cardDiv" className=" d-flex flex-nowrap overflow-scroll" style={{ width: "80%" } } >
				{store.people.map((person, index) => (
                    <PersonCard person={person} key={person.uid} />
                ))}
			</div>
        </React.Fragment>
	);
};
