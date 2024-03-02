import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { PlanetCard } from "./PlanetCard";

export const PlanetSlider = () => {
    const { store } = useContext(Context);

	return (
		<React.Fragment>
            <div  id="cardDiv" className=" d-flex flex-nowrap overflow-scroll" style={{ width: "80%" } } >
				{store.planet.map((planet, index) => (
                    <PlanetCard planet={planet} key={planet.uid} />
                ))}
			</div>
        </React.Fragment>
	);
};
