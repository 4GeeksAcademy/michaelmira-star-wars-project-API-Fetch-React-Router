import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar sticky-top navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img  src="https://visualpharm.com/assets/195/Star%20Wars-595b40b85ba036ed117de471.svg" className="card-img-top" alt="Empty Image" style={{ width: '200px', height: '100px' }} /> 
				</span>
			</Link>
			<div className="ml-auto pr-5">
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					<li id="characterFavorites" className="dropdown-item">
						<h5>Characters</h5>
						{store.favorites
						.filter((favorite) => favorite.category === "people")
						.map((favorite, index) => (
							<li key={index} className="dropdown-item" >
								{console.log(favorite)} 
								{favorite.name}
								<button
									type="button"
									class="btn "
									// data-bs-toggle="modal"
									// data-bs-target={"#deleteModal"+contact.id}
									// onClick={() => {
									// 	let checkFavorite = store.favorites.find((item) => item.name === favorite.name && item.category === "people" )
									// 	if(checkFavorite){
									// 		actions.deleteFavorite(favorite.uid, "people");
									// 	} else {
									// 		console.log("Person not found in favorites");
									// 	}}}
									onClick={() => {
										let checkFavorite = store.favorites.find((item) => item.name === favorite.name && item.category === "people");
										if (checkFavorite) {
										  actions.deleteFavorite(favorite.name, "people");
										} else {
										  console.log("Person not found in favorites");
										}
									  }}

								>
								<i className="fas fa-trash-alt"></i>
								</button>
							</li>
						))}
					</li>
					<li id="planetsFavorites" className="dropdown-item">
						<h5>Planets</h5>
						{store.favorites
							.filter((favorite) => favorite.category === "planets")
							.map((favorite, index) => (
								<li key={index} className="dropdown-item" >
									{console.log(favorite)} 
									{favorite.name}
									<button
										type="button"
										class="btn "
										data-bs-toggle="modal"
										// data-bs-target={"#deleteModal"+contact.id}
									>
									<i className="fas fa-trash-alt"></i>
									</button>
								</li>
						))}
					</li>
					<li id="starshipsFavorites" className="dropdown-item">
						<h5>Starships</h5>
						{store.favorites
							.filter((favorite) => favorite.category === "starships")
							.map((favorite, index) => (
								<li key={index} className="dropdown-item" >
									{console.log(favorite)} 
									{favorite.name}
									<button
										type="button"
										class="btn "
										data-bs-toggle="modal"
										// data-bs-target={"#deleteModal"+contact.id}
									>
									<i className="fas fa-trash-alt"></i>
									</button>
								</li>
						))}
					</li>
				</ul>
			</div>
			
				{/* <Link to="/favorites">
					<button className="btn btn-lg btn-primary" style={{ marginRight: "50px" }} >Favorites</button>
				</Link> */}
			</div>
		</nav>
	);
};
