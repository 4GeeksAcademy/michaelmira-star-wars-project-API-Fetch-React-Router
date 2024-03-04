import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const BACKEND_URL = "https://starwars-visualguide.com/assets/img/planets/"


export const PlanetCard = ({ planet }) => {
	const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
	useEffect(() => {
		actions.getPlanet(planet.uid)
			.then(detailPlanet => setDetail(detailPlanet));
	}, []);

	return (
        <React.Fragment>
            {detail !== undefined ? (
                <div className="card" style={{ minWidth: "18rem" }}>
                    <img src={BACKEND_URL+planet.uid+".jpg"}  className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">{detail.properties.population}</p>
                        <p className="card-text">{detail.properties.terrain}</p>
                        <Link to={"/planet/" + planet.uid} className="btn btn-primary">more info</Link>
                        <button className="danger m-2" >Favorites</button>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}