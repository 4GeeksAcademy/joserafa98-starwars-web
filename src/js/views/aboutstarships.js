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
                    <p className="lead">Model: {starship.properties.model || "Unknown"}</p>
                    <p className="lead">Manufacturer: {starship.properties.manufacturer || "Unknown"}</p>
                    <p className="lead">Cost: {starship.properties.cost_in_credits || "Unknown"}</p>
                    <hr className="my-4" />
                    <p>Find out more about what we offer by clicking below.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">
                        Learn More
                    </a>
                </div>
                <div className="content-bumper">
                    <div className="content-info">
                        <p>Published on: <span>August 28, 2024</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutStarships;
