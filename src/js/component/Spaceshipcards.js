import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetCards = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPlanets(); 
    }, [actions]);

    return (
        <div className="row" style={{ overflowX: "scroll" }}>
            {store.spaceships && store.spaceships.length > 0 ? (
                store.spaships.map((spaceship, index) => ( 
                    <div key={index} className="card" style={{ width: "18rem" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/planets/${spaceship.uid}.jpg`} 
                            className="card-img-top"
                            alt={spaceship.properties.name}  
                        />
                        <div className="card-body">
                            <h5 className="card-title">{spaceship.properties.name}</h5>
                            <p className="card-text">
                                Some details about {spaceship.properties.name}.
                            </p>
                            <Link to={`/aboutplanets/${spaceship.uid}`} className="btn btn-primary">
                                Learn More
                            </Link>
                            <button className="btn btn-warning" onClick={() => actions.addCharacterFavorites(planet)}>
                                <i className="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div>Loading spaceships...</div>
            )}
        </div>
    );
};

export default PlanetCards;
