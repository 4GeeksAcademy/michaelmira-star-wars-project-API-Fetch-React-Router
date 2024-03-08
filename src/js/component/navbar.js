import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img  src="https://visualpharm.com/assets/195/Star%20Wars-595b40b85ba036ed117de471.svg" className="card-img-top" alt="Empty Image" style={{ width: '200px', height: '100px' }} /> 
				</span>
			</Link>
			<div className="ml-auto pr-5">
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown button
				</button>
				<ul className="dropdown-menu">
					<li className="dropdown-item"><h5>Characters</h5></li>
						{store.favorites.map((favorite, index) => (
							<li key={index} className="dropdown-item" >
								{console.log(favorite)} 
								{favorite.name}
							</li>
						))}
					<li><a className="dropdown-item" href="#"><h5>Planets</h5></a></li>
						{store.favorites.map((favorite, index) => (
								<li key={index} className="dropdown-item" >
									{console.log(favorite)} 
									{favorite.name}
								</li>
							))}
					<li><a className="dropdown-item" href="#"><h5>Starships</h5></a></li>
				</ul>
			</div>
			
				<Link to="/favorites">
					<button className="btn btn-lg btn-primary" style={{ marginRight: "50px" }} >Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
