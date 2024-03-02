import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { StarshipCard } from "./StarshipCard";

export const StarshipsSlider = () => {
    const { store } = useContext(Context);

	return (
		<React.Fragment>
            <div  id="cardDiv" className=" d-flex flex-nowrap overflow-scroll" style={{ width: "80%" } } >
				{store.starships.map((starship, index) => (
                    <PlanetCard starship={starship} key={starship.uid} />
                ))}
			</div>
        </React.Fragment>
	);
};
