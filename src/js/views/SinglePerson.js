import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Context } from "../store/appContext";


export const SinglePerson = (props) => {
    const params = useParams(); // {uid: "some-value"}
    const { store, actions } = useContext(Context);
    const [detail, setDetail] = useState();
    useEffect(() => {
        actions.getPerson(params.uid)
        .then(detailPerson => setDetail(detailPerson));
    }, []); 
    return(
        <React.Fragment>
            {detail !== undefined ? (
                <div className="d-flex flex-column">
                    <h2>Hello person with  id: {params.uid}</h2>
                    <p>{detail.properties.eye_color}</p>
                    <p>{detail.properties.hair_color}</p>
                    <p>{detail.description}</p>
                </div>
            ) : null}
        </React.Fragment>
    );

};