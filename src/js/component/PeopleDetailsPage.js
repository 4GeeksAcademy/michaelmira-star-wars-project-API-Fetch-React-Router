import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "./details.css";

export const PeopleDetailsPage = () => {
  const baseImgURL = "https://starwars-visualguide.com/assets/img/characters/";
  const { store, actions } = useContext(Context);
  const [detail, setDetail] = useState();
  const [descriptionTag, setDescriptionTag] = useState();
  const params = useParams();
  let person = store.people.find((item) => item.uid == params.uid);
  useEffect(() => {
    fetch(person.url)
      .then((resp) => resp.json())
      .then((data) => setDetail(data.result.properties));
  }, []);
  useEffect(() => {
    fetch(person.url)
      .then((resp) => resp.json())
      .then((data) => setDescriptionTag(data.result));
  }, []);

  return (
    <React.Fragment>
      <div className="card border border-0 ">
        <div className="landing" style={{ backgroundColor: "#333333" }}>
          <div className="">
            <img
              className="text-light"
              style={{ maxWidth: "110rem", borderRadius: "10px" }}
              src="https://res.cloudinary.com/dufs8hbca/image/upload/v1716040703/vecteezy_planet-earth-images-view-from-space-with-sun-rays-from-the_6659710_tkhzin.jpg"
            ></img>
          </div>
          <div className="content ">
            <div className="row text-center">
              <div className="col-md-6 text-center  pt-4">
                <img
                  src={baseImgURL + params.uid + ".jpg"}
                  style={{ maxWidth: "20rem", borderRadius: "10px" }}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body text-center text-light ">
                  <h1 className="card-title display-1 ">
                    <strong>Name : {detail?.name}</strong>
                  </h1>
                  <h3 className="card-text display-4">
                    Height : {detail?.height}
                  </h3>
                  <h3 className="card-text display-4">
                    Weight : {detail?.mass}
                  </h3>
                  <h3 className="card-text display-4">
                    Hair Color : {detail?.hair_color}
                  </h3>
                  <h3 className="card-text display-4">
                    Skin Color : {detail?.skin_color}
                  </h3>
                  <h3 className="card-text display-4">
                    Eye Color : {detail?.eye_color}
                  </h3>
                  <h3 className="card-text display-4">
                    Birth Year : {detail?.birth_year}
                  </h3>
                  <h3 className="card-text display-4">
                    Gender : {detail?.gender}
                  </h3>
                  <h3 className="card-text display-4">
                    Description : {descriptionTag?.description}
                  </h3>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                      let isOnTheList = store.favorites.find(
                        (item) =>
                          item.name == detail.name && item.category == "people"
                      );
                      if (isOnTheList) {
                        actions.deleteFavorite(detail.name, "people");
                      } else {
                        actions.addFavorite(detail.name, person.uid, "people");
                      }
                    }}
                  >
                    Favorites
                  </button>
                  <Link to={"/"} className="btn btn-primary">
                    {" "}
                    Link Home{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
