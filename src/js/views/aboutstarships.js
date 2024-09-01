// src/views/aboutstarships.js

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const AboutStarships = () => {
    const { store } = useContext(Context);
    const { uid } = useParams();
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        const foundStarship = store.starships.find(starship => starship.uid === uid);
        setStarship(foundStarship);
    }, [uid, store.starships]);

    if (!starship) return <div>Loading...</div>;

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="image-wrapper">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
                        className="card-img-top"
                        alt={starship.properties.name}
                    />
                </div>
                <div className="content-wrapper">
                    <h1 className="display-4">{starship.properties.name}</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                    <p className="lead">Model: {starship.properties.model || "Unknown"}</p>
                    <p className="lead">Manufacturer: {starship.properties.manufacturer || "Unknown"}</p>
                    <p className="lead">Cost: {starship.properties.cost_in_credits || "Unknown"}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutStarships;
