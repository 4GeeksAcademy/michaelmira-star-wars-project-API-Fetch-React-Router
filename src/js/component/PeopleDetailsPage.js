import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const BACKEND_URL = "https://starwars-visualguide.com/assets/img/characters/"

export const PeopleDetailsPage = ({ person }) => {
    const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
    const params = useParams()
	useEffect(() => {
		actions.getPerson(params.uid)
			.then(detailPerson => setDetail(detailPerson));
	}, []);

	return (
        <React.Fragment>
            <div className="card border border-0">
                <div className="row text-center">
                    <div className="col-md-6 text-center">
                        <img src={BACKEND_URL+params.uid+".jpg"} style={{ maxWidth: "40rem" }}  className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-center">
                            <h1 className="card-title display-1 "><strong>Name : {detail?.properties.name}</strong></h1>
                            <h3 className="card-text display-4">Height : {detail?.properties.height}</h3>
                            <h3 className="card-text display-4">Weight : {detail?.properties.mass}</h3>
                            <h3 className="card-text display-4">Hair Color : {detail?.properties.hair_color}</h3>
                            <h3 className="card-text display-4">Skin Color : {detail?.properties.skin_color}</h3>
                            <h3 className="card-text display-4">Eye Color : {detail?.properties.eye_color}</h3>
                            <h3 className="card-text display-4">Birth Year : {detail?.properties.birth_year}</h3>
                            <h3 className="card-text display-4">Gender : {detail?.properties.gender}</h3>
                            <h3 className="card-text display-4">Description : {detail?.description}</h3>
                            <button className="btn btn-primary m-2" onClick={() => {
                                let checkPerson = store.favorites.find((item) => item.name === person.name && item.category === "people" )
                                if(checkPerson){
                                    actions.removeFavorite(person.uid, "people");
                                } else {
                                    actions.addFavorite(detail?.properties.name, detail?.properties.uid, "people");
                                }
                                }} >Favorites
                            </button>
                            <Link to={"/"} className="btn btn-primary"> Link Home </Link>
                        </div>
                    </div>
                    
                </div>       
            </div>
        </React.Fragment>
	);
};
