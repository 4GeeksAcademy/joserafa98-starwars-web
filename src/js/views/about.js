import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const About = () => {
    const { store } = useContext(Context);
    const { theid } = useParams(); 
    const character = store.characters.find(char => char.uid === theid);

    useEffect(() => {
        if (!character) {
            console.error("No character found with this ID!");
        }
    }, [character]);

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                {character ? (
                    <div>
                        <div className="image-wrapper">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
                                className="card-img-top"
                                alt={character.name}
                            />
                        </div>
                        
                        <div className="content-wrapper">
                            <h1 className="display-4">{character.properties.name}</h1>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                            <p className="lead">
                                Height: {character.properties.height || "Unknown"}
                            </p>
                            <p className="lead">
                                Gender: {character.properties.gender || "Unknown"}
                            </p>
                        </div>
                    </div>
                ) : (
                    <p>No characters available.</p>
                )}
            </div>
        </div>
    );
};

