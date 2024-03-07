import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const BACKEND_URL = "https://starwars-visualguide.com/assets/img/characters/"

export const PeopleDetailsPage = () => {
    const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
    const params = useParams()
	useEffect(() => {
		actions.getPerson(params.uid)
			.then(detailPerson => setDetail(detailPerson));
	}, []);

	return (
        <React.Fragment>
            <div className="card">
                <div className="row text-center">
                    <div className="col-md-6 text-center">
                        <img src={BACKEND_URL+params.uid+".jpg"} style={{ maxWidth: "40rem" }}  className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-center">
                            <h1 className="card-title">Name : {detail?.properties.name}</h1>
                            <h3 className="card-text">Height : {detail?.properties.height}</h3>
                            <h3 className="card-text">Weight : {detail?.properties.mass}</h3>
                            <h3 className="card-text">Hair Color : {detail?.properties.hair_color}</h3>
                            <h3 className="card-text">Skin Color : {detail?.properties.skin_color}</h3>
                            <h3 className="card-text">Eye Color : {detail?.properties.eye_color}</h3>
                            <h3 className="card-text">Birth Year : {detail?.properties.birth_year}</h3>
                            <h3 className="card-text">Gender : {detail?.properties.gender}</h3>
                            <h3 className="card-text">Description : {detail?.properties.description}</h3>
                            <Link to={"/"} className="btn btn-primary"> Link Home </Link>
                        </div>
                    </div>
                    
                </div>       
            </div>
        </React.Fragment>
	);
};
