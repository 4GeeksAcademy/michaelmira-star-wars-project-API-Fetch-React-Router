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
          <div>
            <img
              className="text-light"
              style={{ maxWidth: "110rem", borderRadius: "10px" }}
              src="https://res.cloudinary.com/dufs8hbca/image/upload/v1716040703/vecteezy_planet-earth-images-view-from-space-with-sun-rays-from-the_6659710_tkhzin.jpg"
            ></img>
          </div>
          <div className="content ">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <img
                  src={baseImgURL + params.uid + ".jpg"}
                  style={{ maxWidth: "20rem", borderRadius: "10px" }}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="col-md-6 pb-5 text-light">
                <div
                  style={{
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 50px rgba(255, 255, 255, 0.2)",
                    border: "1px solid white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                    <strong> Name : {detail?.name}</strong>
                  </h2>
                  <div style={{ marginBottom: "20px" }}>
                    <h5 className="card-text"> Height : {detail?.height}</h5>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <h5 className="card-text"> Weight : {detail?.mass}</h5>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <h5 className="card-text">
                      {" "}
                      Hair Color : {detail?.hair_color}
                    </h5>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <h5 className="card-text">
                      {" "}
                      Skin Color : {detail?.skin_color}
                    </h5>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <h5 className="card-text">
                      {" "}
                      Birth Year : {detail?.birth_year}
                    </h5>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <h5 className="card-text">
                      {" "}
                      Eye Color : {detail?.eye_color}
                    </h5>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <h5 className="card-text">Gender : {detail?.gender}</h5>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <h5 className="card-text">
                      {" "}
                      Description : {descriptionTag?.description}
                    </h5>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary m-2"
                      onClick={() => {
                        let isOnTheList = store.favorites.find(
                          (item) =>
                            item.name == detail.name &&
                            item.category == "people"
                        );
                        if (isOnTheList) {
                          actions.deleteFavorite(detail.name, "people");
                        } else {
                          actions.addFavorite(
                            detail.name,
                            person.uid,
                            "people"
                          );
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
          <div className="row text-center">
            <div className="col-md-6">
              <div className="card-body text-center text-light "></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
