import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const BACKEND_URL = "https://starwars-visualguide.com/assets/img/starships/"


export const StarshipCard = ({ starship }) => {
	const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
	useEffect(() => {
		actions.getStarship(starship.uid)
			.then(detailStarship => setDetail(detailStarship));
	}, []);

	return (
        <React.Fragment>
            {detail !== undefined ? (
                <div className="card" style={{ minWidth: "18rem" }}>
                    <img src={BACKEND_URL+starship.uid+".jpg"}  className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{starship.name}</h5>
                        <p className="card-text">{detail.properties.model}</p>
                        <p className="card-text">{detail.properties.class}</p>
                        <Link to={"/starship/" + starship.uid} className="btn btn-primary">more info</Link>
                        <button className="danger m-2" onClick={() => {
                            let checkStarship = store.favorites.find((item) => item.name === starship.name && item.category === "starships" )
                            if(checkStarship){
                                actions.removeFavorite(starship.uid, "starships");
                            } else {
                                actions.addFavorite(starship.name, starship.uid, "starships");
                            }
                        }} >Favorites</button>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}