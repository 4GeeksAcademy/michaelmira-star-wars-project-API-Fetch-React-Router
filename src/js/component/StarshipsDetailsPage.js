import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const BACKEND_URL = "https://starwars-visualguide.com/assets/img/starships/"

export const StarshipsDetailsPage = ({ starship }) => {
    const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
    const params = useParams()
	useEffect(() => {
		actions.getStarship(params.uid)
			.then(detailStarship => setDetail(detailStarship));
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
                            <h3 className="card-text display-5">starship_class : {detail?.properties.starship_class}</h3>
                            <h3 className="card-text display-5">manufacturer : {detail?.properties.manufacturer}</h3>
                            <h3 className="card-text display-5">cost_in_credits : {detail?.properties.cost_in_credits}</h3>
                            <h3 className="card-text display-5">length : {detail?.properties.length}</h3>
                            <h3 className="card-text display-5">crew : {detail?.properties.crew}</h3>
                            <h3 className="card-text display-5">passengers : {detail?.properties.passengers}</h3>
                            <h3 className="card-text display-5">max_atmosphering_speed : {detail?.properties.max_atmosphering_speed}</h3>
                            <h3 className="card-text display-5">hyperdrive_rating : {detail?.properties.hyperdrive_rating}</h3>
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
