// src/component/Starshipcards.js

import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const StarshipCards = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadStarships(); 
    }, [actions]);

    return (
        <div className="row">
            <h1>Starships</h1>
            <div className="row flex-nowrap" style={{ overflowX: "auto", maxWidth: "100vw" }}>
            {store.starships && store.starships.length > 0 ? (
                store.starships.map((starship, index) => (
                    <div key={index} className="card" style={{ width: "18rem" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} 
                            className="card-img-top"
                            alt={starship.properties.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{starship.properties.name}</h5>
                            <p className="card-text">Model: {starship.properties.model || "Unknown"}</p>
                            <p className="card-text">Manufacturer: {starship.properties.manufacturer || "Unknown"}</p>
                            <Link to={`/aboutstarships/${starship.uid}`} className="btn btn-primary">
                                Learn More
                            </Link>
                            <button className="btn btn-warning" onClick={() => actions.addCharacterFavorites(starship)}>
                                <i className="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div>Loading starships...</div> 
            )}
        </div>
        </div>
    );
};

export default StarshipCards;

