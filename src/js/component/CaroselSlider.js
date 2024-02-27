import React from "react";
import { Link } from "react-router-dom";
import "./CaroselSlider.css";

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"></link>




export const CaroselSlider = () => {
    const initSlider = () =>{
        const imageList = document.querySelector(".slider-wrapper .image-list");
        const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
        const v = document.querySelectorAll(".container .slider-scrollbar");
        const scrollbarThumb = document.querySelectorAll(".scrollbar-thumb");
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                const direction = button.id === "prev-slide" ? -1 : 1;
                const scrollAmount = imageList.clientWidth * direction;
                imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }); 
        });
    
        const handleSlideButtons = ()  => {
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
            slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
        }

        const updateScrollThumbPosition = () => {
            const scrollPosition = imageList.scrollLeft;
            const thumbPosition = (scrollPosition /maxScrollLeft) * (sliderScrollbar)
        }
    
        imageList.addEventListener("scroll", () => {
            handleSlideButtons();
        });
    }
    
    
    
    window.addEventListener("load", initSlider);

	return (
		<React.Fragment>
            <div className="container">
                <div className="slider-wrapper">
                    <button id="prev-slide" className="slide-button material-symbols-rounded"><h2>&lt;</h2></button>
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
                    <button id="next-slide" className="slide-button material-symbols-rounded"><h3>&gt;</h3></button>
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
