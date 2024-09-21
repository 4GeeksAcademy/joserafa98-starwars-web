import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetCards = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPlanetsFromLocalStorage();
        actions.loadPlanets(); 
    }, []);
    
    
    return (
        <div className="container">
            <h1>Planets</h1>
            <div className="row flex-nowrap" style={{ overflowX: "auto", maxWidth: "100vw" }}>
            {store.planets && store.planets.length > 0 ? (
                store.planets.map((planet, index) => ( 
                    <div className="col-12 col-md-6 col-lg-3" key={index}>
                    <div key={index} className="card" style={{ width: "18rem" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} 
                            className="card-img-top"
                            alt={planet.properties ? planet.properties.name : "Planet Image"}
                            onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src = 'https://i.pinimg.com/736x/88/53/f3/8853f3816ff02c08a68d2c665fef5c59.jpg';
                            }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{planet.properties ? planet.properties.name : "Planet Name"}</h5>
                            <p className="card-text">
                                Climate: {planet.properties.climate || "Unknown"}
                            </p>
                            <p className="card-text">
                                Population: {planet.properties.population || "Unknown"}
                            </p>
                            <Link to={`/aboutplanets/${planet.uid}`} className="btn btn-primary" id="specialButton">
                                Learn More
                            </Link>
                            <button className="btn btn-warning" onClick={() => actions.addCharacterFavorites(planet)}>
                                <i className="fa-regular fa-heart"></i>
                            </button>
                        </div>
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

