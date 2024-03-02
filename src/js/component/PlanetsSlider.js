import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { PlanetCard } from "./PlanetCard";

export const PlanetsSlider = () => {
    const { store } = useContext(Context);

	return (
		<React.Fragment>
            <div  id="cardDiv" className=" d-flex flex-nowrap overflow-scroll" style={{ width: "80%" } } >
				{store.planets.map((planet, index) => (
                    <PlanetCard planet={planet} key={planet.uid} />
                ))}
			</div>
        </React.Fragment>
	);
};
