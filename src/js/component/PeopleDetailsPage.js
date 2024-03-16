import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";



export const PeopleDetailsPage = () => {
    const baseImgURL = "https://starwars-visualguide.com/assets/img/characters/"
    const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
    const [ descriptionTag, setDescriptionTag] = useState()
    const params = useParams()
    let person = store.people.find((item)=>item.uid==params.uid)
	useEffect(() => {
		fetch(person.url)
        .then(resp => resp.json())
        .then(data => setDetail(data.result.properties))
        
	}, [])
    useEffect(() => {
		fetch(person.url)
        .then(resp => resp.json())
        .then(data => setDescriptionTag(data.result))
	}, [])

	return (
        <React.Fragment>
            <div className="card border border-0">
                <div className="row text-center">
                    <div className="col-md-6 text-center">
                        <img src={baseImgURL+params.uid+".jpg"} style={{ maxWidth: "40rem" }}  className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-center">
                            <h1 className="card-title display-1 "><strong>Name : {detail?.name}</strong></h1>
                            <h3 className="card-text display-4">Height : {detail?.height}</h3>
                            <h3 className="card-text display-4">Weight : {detail?.mass}</h3>
                            <h3 className="card-text display-4">Hair Color : {detail?.hair_color}</h3>
                            <h3 className="card-text display-4">Skin Color : {detail?.skin_color}</h3>
                            <h3 className="card-text display-4">Eye Color : {detail?.eye_color}</h3>
                            <h3 className="card-text display-4">Birth Year : {detail?.birth_year}</h3>
                            <h3 className="card-text display-4">Gender : {detail?.gender}</h3>
                            <h3 className="card-text display-4">Description : {descriptionTag?.description}</h3>
                            <button className="btn btn-primary m-2" onClick={() =>{
                                let isOnTheList = store.favorites.find((item) =>item.name==detail.name && item.category=="people")
                                if(isOnTheList){
                                    actions.deleteFavorite(detail.name, "people")
                                } else {
                                    actions.addFavorite(detail.name, person.uid, "people")
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
