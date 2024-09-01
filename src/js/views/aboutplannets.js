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
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                    <p className="lead">
                        Climate: {planet.properties.climate || "Unknown"}
                    </p>
                    <p className="lead">
                        Population: {planet.properties.population || "Unknown"}
                    </p>
                    <p className="lead">
                        Terrain: {planet.properties.terrain || "Unknown"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPlanet;

