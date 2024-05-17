import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const BACKEND_URL = "https://starwars-visualguide.com/assets/img/characters/"


export const PersonCard = ({ person }) => {
	const { store, actions } = useContext(Context);
	const [ detail, setDetail ] = useState()
    const [imageAvailable, setImageAvailable] = useState(true);

   
	useEffect(() => {
		actions.getPerson(person.uid)
			.then(detailPerson => setDetail(detailPerson));
	}, []);

    const handleImageError = () => {
        setImageAvailable(false);
    };

	return (
        <React.Fragment>
             {detail !== undefined && imageAvailable ? (
                <div className="card px-2" style={{ minWidth: "15rem", maxWidth: "15rem", backgroundColor: "transparent" }}>
                    <img 
                        src={BACKEND_URL+person.uid+".jpg"} 
                        style={{ maxWidth: "17rem", borderRadius: "10px" }}  
                        className="card-img-top" alt="..."
                        onError={handleImageError}
                        
                    />
                    <div className="text-white" >
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">{detail.properties.eye_color}</p>
                        <p className="card-text">{detail.properties.hair_color}</p>
                        <Link to={"/details/characters/" + person.uid} className="btn btn-primary">more info</Link>
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