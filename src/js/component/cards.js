import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const StarwarsCards = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadCharacters(); 
    }, [actions]);

    return (
        <div className="row" style={{ overflowX: "scroll" }}>
            {store.characters && store.characters.length > 0 ? (
                store.characters.map((character, index) => (
                    <div key={index} className="card" style={{ width: "18rem" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
                            className="card-img-top"
                            alt={character.properties.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{character.properties.name}</h5>
                            <p className="card-text">
                                Some details about {character.properties.name}.
                            </p>
                            <Link to={`/about/${character.uid}`} className="btn btn-primary">
                                Learn More
                            </Link>
                            <Link to="#" className="btn btn-warning">
                                <i className="fa-regular fa-heart" onClick={() => actions.addCharacterFavorites(character)}></i>
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <div>Loading characters...</div>
            )}
        </div>
    );
};

export default StarwarsCards;
