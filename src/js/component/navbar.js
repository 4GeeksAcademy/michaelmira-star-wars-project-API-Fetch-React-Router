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
			<div className="ml-auto ">
				<div className="dropdown px-3">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<li id="characterFavorites" className="dropdown-item ">
							<h5>Characters</h5>
							{store.favorites
							.filter((favorite) => favorite.category === "people")
							.map((favorite, index) => (
								<li key={index} className="dropdown-item" >
									<Link to={"/details/characters/" + favorite.uid}  >{favorite.name}</Link>
									<button
										type="button"
										className="btn "
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
										<Link to={"/planet/" + favorite.uid}  >{favorite.name}</Link>
										<button
											type="button"
											className="btn "
											onClick={() => {
												let checkFavorite = store.favorites.find((item) => item.name === favorite.name && item.category === "planets");
												if (checkFavorite) {
												actions.deleteFavorite(favorite.name, "planets");
												} else {
												console.log("Planets not found in favorites");
												}
											}}
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
									<Link to={"/starship/" + favorite.uid}  >{favorite.name}</Link>
									<button
										type="button"
										className="btn "
										onClick={() => {
											let checkFavorite = store.favorites.find((item) => item.name === favorite.name && item.category === "starships");
											if (checkFavorite) {
											actions.deleteFavorite(favorite.name, "starships");
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
					</ul>
				</div>
			</div>
		</nav>
	);
};
