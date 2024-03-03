import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { PersonDetailsCard } from "./PersonDetailsCard";

export const PeopleDetailsSlider = () => {
    const { store } = useContext(Context);

	return (
		<React.Fragment>
            <div>
                <h1>Character Details </h1>

                    
				{/* {store.people.map((person, index) => (
                    <PersonDetailsCard person={person} key={person.uid} />
                ))} */}
			</div>
        </React.Fragment>
	);
};
