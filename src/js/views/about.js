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
                            <p className="lead">
                                Height: {character.properties.height || "Unknown"}
                            </p>
                            <p className="lead">
                                Gender: {character.properties.gender || "Unknown"}
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
                ) : (
                    <p>No characters available.</p>
                )}
            </div>
        </div>
    );
};

