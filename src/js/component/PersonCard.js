import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const BACKEND_URL = "https://starwars-visualguide.com/assets/img/characters/"


export const PersonCard = ({ person }) => {
	const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
	useEffect(() => {
		actions.getPerson(person.uid)
			.then(detailPerson => setDetail(detailPerson));
	}, []);

	return (
        <React.Fragment>
            {detail !== undefined ? (
                <div className="card" style={{ minWidth: "15rem" }}>
                    <img src={BACKEND_URL+person.uid+".jpg"} style={{ maxWidth: "15rem" }}  className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">{detail.properties.eye_color}</p>
                        <p className="card-text">{detail.properties.hair_color}</p>
                        <Link to={"/details/characters/" + person.uid} className="btn btn-primary">more info</Link>
                        {/* <button className="btn btn-primary m-2" onClick={() => {
                            let checkPerson = store.favorites.find((item) => item.name === person.name && item.category === "people" )
                            if(checkPerson){
                                actions.deleteFavorite(person.uid, "people");
                            } else {
                                actions.addFavorite(person.name, person.uid, "people");
                            }
                        }} >favorites</button> */}

                        <button className="btn btn-primary m-2" onClick={() =>{
                            let isOnTheList = store.favorites.find((item) =>item.name == person.name && item.category =="people")
                            if(isOnTheList){
                                actions.deleteFavorite(person.name, "people")
                            } else {
                                actions.addFavorite(person.name, person.uid, "people")
                            }
                        }} >Favorites</button>
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}