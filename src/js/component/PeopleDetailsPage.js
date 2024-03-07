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
            <div className="card" style={{ minWidth: "18rem" }}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={BACKEND_URL+params.uid+".jpg"} style={{ maxWidth: "40rem" }}  className="card-img-top" alt="..." />
                        <div className="col-md-6" >
                            <div className="card-body">
                                <h5 className="card-title">{detail?.properties.name}</h5>
                                <p className="card-text">{detail?.properties.height}</p>
                                <p className="card-text">{detail?.properties.mass}</p>
                                <p className="card-text">{detail?.properties.hair_color}</p>
                                <p className="card-text">{detail?.properties.skin_color}</p>
                                <p className="card-text">{detail?.properties.eye_color}</p>
                                <p className="card-text">{detail?.properties.birth_year}</p>
                                <p className="card-text">{detail?.properties.gender}</p>
                                <p className="card-text">{detail?.properties.description}</p>
                                <Link to={"/"} className="btn btn-primary"> Link Home </Link>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        </React.Fragment>
	);
};
