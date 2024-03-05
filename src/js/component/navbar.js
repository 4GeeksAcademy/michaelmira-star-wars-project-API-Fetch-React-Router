import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img  src="https://visualpharm.com/assets/195/Star%20Wars-595b40b85ba036ed117de471.svg" className="card-img-top" alt="Empty Image" style={{ width: '200px', height: '100px' }} /> 
				</span>
			</Link>
			<div className="ml-auto pr-5">
				<Link to="/favorites">
					<button className="btn btn-primary" style={{ marginRight: "50px" }} >Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
