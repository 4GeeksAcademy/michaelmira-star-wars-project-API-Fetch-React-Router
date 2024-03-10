import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const BACKEND_URL = "https://starwars-visualguide.com/assets/img/planets/"

export const PlanetsDetailsPage = ({ planet }) => {
    const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
    const params = useParams()
	useEffect(() => {
		actions.getPlanet(params.uid)
			.then(detailPlanet => setDetail(detailPlanet));
	}, []);

	return (
        <React.Fragment>
            <div className="card border border-0">
                <div className="row text-center">
                    <div className="col-md-6 text-center">
                        <img src={BACKEND_URL+params.uid+".jpg"} style={{ maxWidth: "50rem" }}  className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-center">
                            <h1 className="card-title display-2 "><strong>Name : {detail?.properties.name}</strong></h1>
                            <h3 className="card-text display-5">Diameter : {detail?.properties.diameter}</h3>
                            <h3 className="card-text display-5">Rotation Period : {detail?.properties.rotation_period}</h3>
                            <h3 className="card-text display-5">Orbital Period : {detail?.properties.orbital_period}</h3>
                            <h3 className="card-text display-5">Gravity : {detail?.properties.gravity}</h3>
                            <h3 className="card-text display-5">Population : {detail?.properties.population}</h3>
                            <h3 className="card-text display-5">Climate : {detail?.properties.climate}</h3>
                            <h3 className="card-text display-5">Terrain : {detail?.properties.terrain}</h3>
                            <h3 className="card-text display-5">Surface Water : {detail?.properties.surface_water}</h3>
                            <h3 className="card-text display-5">Description : {detail?.description}</h3>
                            <button className="btn btn-primary m-2" onClick={() => {
                            let checkPerson = store.favorites.find((item) => item.name === person.name && item.category === "people" )
                            if(checkPerson){
                                actions.removeFavorite(person.uid, "people");
                            } else {
                                actions.addFavorite(person.name, person.uid, "people");
                            }
                            }} >Favorites</button>
                            <Link to={"/"} className="btn btn-primary"> Link Home </Link>
                        </div>
                    </div>
                    
                </div>       
            </div>
        </React.Fragment>
	);
};
