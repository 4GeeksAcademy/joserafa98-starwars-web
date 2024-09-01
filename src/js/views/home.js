import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import StarwarsCards from "../component/cards";
import PlanetCards from "../component/planetcards";
import StarshipCards from "../component/Starshipcards";

export const Home = () => (
	<>
	<StarwarsCards></StarwarsCards>
	<PlanetCards></PlanetCards>
	<StarshipCards></StarshipCards>
	</>
);
