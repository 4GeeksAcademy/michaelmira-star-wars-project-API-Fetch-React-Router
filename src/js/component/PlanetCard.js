import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const BACKEND_URL = "https://starwars-visualguide.com/assets/img/planets/"


export const PlanetCard = ({ planet }) => {
	const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
    const [imageAvailable, setImageAvailable] = useState(true);

	useEffect(() => {
		actions.getPlanet(planet.uid)
			.then(detailPlanet => setDetail(detailPlanet));
	}, []);

    const handleImageError = () => {
        setImageAvailable(false);
    };

	return (
        <React.Fragment>
            {detail !== undefined && imageAvailable ? (
                <div className="card" style={{ minWidth: "15rem", maxWidth: "15rem", backgroundColor: "transparent" }}>
                    <img 
                        src={BACKEND_URL+planet.uid+".jpg"} 
                        style={{ maxWidth: "17rem",borderRadius: "10px" }}  
                        className="card-img-top" alt="..." 
                        onError={handleImageError}
                    />
                    <div className="text-light" >
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">{detail.properties.population}</p>
                        <p className="card-text">{detail.properties.terrain}</p>
                        <Link to={"/planet/" + planet.uid} className="btn btn-primary">more info</Link>
                        

                        <button className="btn btn-primary m-2" onClick={() =>{
                            let isOnTheList = store.favorites.find((item) =>item.name == planet.name && item.category == "planets")
                            if(isOnTheList){
                                actions.deleteFavorite(planet.name, "planets")
                            } else {
                                actions.addFavorite(planet.name, planet.uid, "planets")
                            }
                        }} >Favorites</button>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}