import React from "react";
import { Link } from "react-router-dom";
import "./CaroselSlider.css";

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"></link>




export const CaroselSlider = () => {
	return (
		<React.Fragment>
            <div className="container">
                <div className="slider-wrapper">
                    <button id="prev-slide" className="slide-button material-symbols-rounded">Chevron_left</button>
                    <div className="image-list">
                        <img src="https://picsum.photos/200" alt="img-1" className="image-item"></img>
                        <img src="https://picsum.photos/200" alt="img-2" className="image-item"></img>
                        <img src="https://picsum.photos/200" alt="img-3" className="image-item"></img>
                        <img src="https://picsum.photos/200" alt="img-4" className="image-item"></img>
                        <img src="https://picsum.photos/200" alt="img-5" className="image-item"></img>
                        <img src="https://picsum.photos/200" alt="img-6" className="image-item"></img>
                        <img src="https://picsum.photos/200" alt="img-7" className="image-item"></img>
                        <img src="https://picsum.photos/200" alt="img-8" className="image-item"></img>
                        <img src="https://picsum.photos/200" alt="img-9" className="image-item"></img>
                        <img src="https://picsum.photos/200" alt="img-10" className="image-item"></img>
                    </div>
                    <button id="next-slide" className="slide-button material-symbols-rounded">Chevron_Right</button>
                </div>
                <div className="slider-scrollbar">
                    <div className="scrollbar-track">
                        <div className="scrollbar-thumb">

                        </div>

                    </div>
                </div> 
            </div>
        </React.Fragment>
	);
};
