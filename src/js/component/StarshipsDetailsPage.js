import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const BACKEND_URL = "https://starwars-visualguide.com/assets/img/starships/"

export const StarshipsDetailsPage = () => {
    const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
    const [ descriptionTag, setDescriptionTag] = useState()
    const params = useParams()
	let starship = store.starships.find((item)=>item.uid==params.uid)
	useEffect(() => {
		fetch(starship.url)
        .then(resp => resp.json())
        .then(data => setDetail(data.result.properties))
	}, [])

    useEffect(() => {
		fetch(starship.url)
        .then(resp => resp.json())
        .then(data => setDescriptionTag(data.result))
	}, [])

	return (
        <React.Fragment>
            <div className="card border border-0">
                <div className="row text-center">
                    <div className="col-md-6 text-center">
                        <img src={BACKEND_URL+params.uid+".jpg"} style={{ maxWidth: "50rem", height: "auto" }}  className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-center">
                            <h1 className="card-title display-3 "><strong>Name : {detail?.name}</strong></h1>
                            <h3 className="card-text ">Starship Class : {detail?.starship_class}</h3>
                            <h3 className="card-text ">Manufacturer : {detail?.manufacturer}</h3>
                            <h3 className="card-text ">Cost In Credits : {detail?.cost_in_credits}</h3>
                            <h3 className="card-text ">Length : {detail?.length}</h3>
                            <h3 className="card-text ">Crew : {detail?.crew}</h3>
                            <h3 className="card-text ">Passengers : {detail?.passengers}</h3>
                            <h3 className="card-text ">Max Atmosphering Speed : {detail?.max_atmosphering_speed}</h3>
                            <h3 className="card-text ">Hyperdrive Rating : {detail?.hyperdrive_rating}</h3>
                            <h3 className="card-text ">Description : {descriptionTag?.description}</h3>
                            <button className="btn btn-primary m-2" onClick={() =>{
                                let isOnTheList = store.favorites.find((item) =>item.name==detail.name && item.category=="starshps")
                                if(isOnTheList){
                                    actions.deleteFavorite(detail.name, "starships")
                                } else {
                                    actions.addFavorite(detail.name, starship.uid, "starships")
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
