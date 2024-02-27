import React from "react";
import { Link } from "react-router-dom";
import "./CaroselSlider.css";

export const CaroselSlider = () => {
	return (
		<React.Fragment>
            <div className="container">
                <div className="slider-wrapper">
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
