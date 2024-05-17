import React from "react";
import "../../styles/home.css";
import { PeopleSlider } from "../component/PeopleSlider";
import { PlanetsSlider } from "../component/PlanetsSlider";
import { StarshipsSlider } from "../component/StarshipsSlider";
import video from "./assets/Video1.mp4";

export const Home = () => {
  return (
    <>
      <div className="landing ">
        <div className="video-container">
          <video src={video} autoPlay muted loop></video>
        </div>
        <div className="overlay"></div>
        <div className="content ">
          <div className="cardDiv text-center d-flex flex-column w-100 align-items-center  ">
            <h2 className="m-3 text-light">People</h2>
            <PeopleSlider />
            <h2 className="m-3 text-light">Panets</h2>
            <PlanetsSlider />
            <h2 className="m-3 text-light">Starships</h2>
            <StarshipsSlider />
          </div>
        </div>
      </div>
    </>
  );
};
