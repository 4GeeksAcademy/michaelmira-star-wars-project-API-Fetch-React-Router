import React, { useEffect, useState } from "react";
import { useParams } from "react-router"


export const SinglePerson = (props) => {
    const params = useParams(); // {uid: "some-value"}
    const { store, actions } = useContrext(Context);
    const [detail, setDetail] = useState();
   