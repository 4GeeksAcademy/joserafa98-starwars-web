import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetCards = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPlanets(); 
    }, [actions]);

    return (
        <div className="container">
            <h1>Planets</h1>
            <div className="row flex-nowrap" style={{ overflowX: "auto", maxWidth: "100vw" }}>
            {store.planets && store.planets.length > 0 ? (
                store.planets.map((planet, index) => ( 
                    <div key={index} className="card" style={{ width: "18rem" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} 
                            className="card-img-top"
                            alt={planet.properties ? planet.properties.name : "Planet Image"}  
                        />
                        <div className="card-body">
                            <h5 className="card-title">{planet.properties ? planet.properties.name : "Planet Name"}</h5>
                            <p className="card-text">
                                Climate: {planet.properties.climate || "Unknown"}
                            </p>
                            <p className="card-text">
                                Population: {planet.properties.population || "Unknown"}
                            </p>
                            <Link to={`/aboutplanets/${planet.uid}`} className="btn btn-primary">
                                Learn More
                            </Link>
                            <button className="btn btn-warning" onClick={() => actions.addCharacterFavorites(planet)}>
                                <i className="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div>Loading planets...</div>
            )}
        </div>
        </div>
    );
};

export default PlanetCards;

