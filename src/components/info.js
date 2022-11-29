import React, { useState, useEffect } from "react";
import '../App.css';

const Info = (props) => {

    const [name, setName] = useState("Namely");

    return (
        <div>{name}</div>
    )
}

export default Info;