import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";


export const PeopleDetailsSlider = () => {
    const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
	useEffect(() => {
		actions.getPerson(person.uid)
			.then(detailPerson => setDetail(detailPerson));
	}, []);

	return (
		<React.Fragment>
            <div>
                <h1>Character Details </h1>
                <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">{detail.properties.height}</p>
                        <p className="card-text">{detail.properties.mass}</p>
                        <p className="card-text">{detail.properties.hair_color}</p>
                        <p className="card-text">{detail.properties.skin_color}</p>
                        <p className="card-text">{detail.properties.eye_color}</p>
                        <p className="card-text">{detail.properties.birth_year}</p>
                        <p className="card-text">{detail.properties.gender}</p>
                        <p className="card-text">{detail.properties.description}</p>
                        <Link to={"/"} className="btn btn-primary"> Link Home </Link>
                    </div>

			</div>
        </React.Fragment>
	);
};
