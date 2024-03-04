import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const BACKEND_URL = "https://starwars-visualguide.com/assets/img/characters/"

export const PeopleDetailsSlider = () => {
    const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
	useEffect(() => {
        const uid = match.params.uid
		actions.getPerson(person.uid)
			.then(detailPerson => setDetail(detailPerson));
	}, [match.params.uid]);

	return (
        <React.Fragment>
        <div className="card" style={{ minWidth: "18rem" }}>
            <img src={BACKEND_URL+person.uid+".jpg"}  className="card-img-top" alt="..." />
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
