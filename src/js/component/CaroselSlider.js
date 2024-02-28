import React from "react";
import "./CaroselSlider.css";

export const CaroselSlider = () => {
    const initSlider = () =>{
        const imageList = document.querySelector(".slider-wrapper .image-list");
        const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
        const sliderScrollbar = document.querySelectorAll(".container .slider-scrollbar");
        const scrollbarThumb = sliderScrollbar[0].querySelector(".scrollbar-thumb");
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

        // handle scrollbar thumb drag
        scrollbarThumb.addEventListener("mousedown", (e) => {
            const startX = e.clientX;
            const thumbPosition = scrollbarThumb.offsetLeft;

            //Update thumb position on mouse move
            const handleMouseMove = (e) => {
                const deltaX = e.clientX - startX;
                const newThumbPosition = thumbPosition + deltaX;
                const maxThumbPosition = sliderScrollbar[0].getBoundingClientRect().width - scrollbarThumb.offsetWidth;

                const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

                scrollbarThumb.style.left = `${boundedPosition}px`;
                imageList.scrollLeft = scrollPosition;
            }
            
            // Remove event listeners on mouse up
            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            }

            // Add event listeners for drag interaction
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        });
    
        // slide images according to the slide button clicks
        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                const direction = button.id === "prev-slide" ? -1 : 1;
                const scrollAmount = imageList.clientWidth * direction;
                imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }); 
        });
    
        // Update scrollbart thumb
        const handleSlideButtons = ()  => {
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
            slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
        }
    
        const updateScrollThumbPosition = () => {
            const scrollPosition = imageList.scrollLeft;
            const thumbPosition = (scrollPosition /  maxScrollLeft) * (sliderScrollbar[0].clientWidth - scrollbarThumb.offsetWidth);
            scrollbarThumb.style.left = `${thumbPosition}px`;
        }
    
        imageList.addEventListener("scroll", () => {
            handleSlideButtons();
            updateScrollThumbPosition();
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
