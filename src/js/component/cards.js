import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const StarwarsCards = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadCharacters(); 
    }, [actions]);

    return (
        <>
        <div className="container">
        <h1>Characters</h1>
        <div className="row flex-nowrap" style={{ overflowX: "auto", maxWidth: "100vw"}}>
            {store.characters && store.characters.length > 0 ? (
                store.characters.map((character, index) => (
                    <div className="col-12 col-md-6 col-lg-3" key={index}>
                    <div key={index} className="card" style={{ width: "18rem" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
                            className="card-img-top"
                            alt={character.properties.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{character.properties.name}</h5>
                            <p className="card-text">
                                Height: {character.properties.height || "Unknown"}
                            </p>
                            <p className="card-text">
                                Gender: {character.properties.gender || "Unknown"}
                            </p>
                            <Link to={`/about/${character.uid}`} className="btn btn-primary">
                                Learn More
                            </Link>
                            <Link to="#" className="btn btn-warning">
                                <i className="fa-regular fa-heart" onClick={() => actions.addCharacterFavorites(character)}></i>
                            </Link>
                        </div>
                    </div>
                    </div>   
                ))
            ) : (
                <div>Loading characters...</div>
            )}
        </div>
        </div> 
        </>
    );
};

export default StarwarsCards;
