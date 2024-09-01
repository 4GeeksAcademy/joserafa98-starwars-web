import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const AboutPlanet = () => {
    const { store } = useContext(Context);
    const { uid } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        const foundPlanet = store.planets.find(planet => planet.uid === uid);
        setPlanet(foundPlanet);
    }, [uid, store.planets]);

    if (!planet) return <div>Loading...</div>;

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="image-wrapper">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} 
                        className="card-img-top"
                        alt={planet.properties.name}
                    />
                </div>
                
                <div className="content-wrapper">
                    <h1 className="display-4">{planet.properties.name}</h1>
                    <p className="lead">
                        Climate: {planet.properties.climate || "Unknown"}
                    </p>
                    <p className="lead">
                        Population: {planet.properties.population || "Unknown"}
                    </p>
                    <p className="lead">
                        Terrain: {planet.properties.terrain || "Unknown"}
                    </p>
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

export default AboutPlanet;

