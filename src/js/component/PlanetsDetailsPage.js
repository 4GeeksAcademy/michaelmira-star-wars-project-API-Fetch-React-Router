import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const BACKEND_URL = "https://starwars-visualguide.com/assets/img/planets/"

export const PlanetsDetailsPage = () => {
    const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
    const [ descriptionTag, setDescriptionTag] = useState()
    const params = useParams()
	let planet = store.planets.find((item)=>item.uid==params.uid)
	useEffect(() => {
		fetch(planet.url)
        .then(resp => resp.json())
        .then(data => setDetail(data.result.properties))
        
	}, [])

    useEffect(() => {
		fetch(planet.url)
        .then(resp => resp.json())
        .then(data => setDescriptionTag(data.result))
	}, [])

	return (
        <React.Fragment>
            <div className="card border border-0">
                <div className="row text-center">
                    <div className="col-md-6 text-center">
                        <img src={BACKEND_URL+params.uid+".jpg"} style={{ maxWidth: "50rem" }}  className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-center">
                            <h1 className="card-title display-2 "><strong>Name : {detail?.name}</strong></h1>
                            <h3 className="card-text display-5">Diameter : {detail?.diameter}</h3>
                            <h3 className="card-text display-5">Rotation Period : {detail?.rotation_period}</h3>
                            <h3 className="card-text display-5">Orbital Period : {detail?.orbital_period}</h3>
                            <h3 className="card-text display-5">Gravity : {detail?.gravity}</h3>
                            <h3 className="card-text display-5">Population : {detail?.population}</h3>
                            <h3 className="card-text display-5">Climate : {detail?.climate}</h3>
                            <h3 className="card-text display-5">Terrain : {detail?.terrain}</h3>
                            <h3 className="card-text display-5">Surface Water : {detail?.surface_water}</h3>
                            <h3 className="card-text display-5">Description : {descriptionTag?.description}</h3>
                            <button className="btn btn-primary m-2" onClick={() =>{
                                let isOnTheList = store.favorites.find((item) =>item.name==detail.name && item.category=="planets")
                                if(isOnTheList){
                                    actions.deleteFavorite(detail.name, "planets")
                                } else {
                                    actions.addFavorite(detail.name, planet.uid, "planets")
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
