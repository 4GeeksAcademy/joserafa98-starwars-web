const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			spaceships: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadCharacters: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/people/');
					const data = await response.json();
					const results = data.results;
			
					const characters = [];
					const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms)); 
			
					for (let i = 0; i < results.length; i++) {
						try {
							const characterResponse = await fetch(`https://www.swapi.tech/api/people/${results[i].uid}`);
							if (!characterResponse.ok) {
								throw new Error(`Failed to fetch character with uid: ${results[i].uid}`);
							}
							const characterData = await characterResponse.json();
							characters.push(characterData.result);
			
							await delay(1000); 
						} catch (error) {
							console.error("Error fetching character:", error);
						}
					}
			
					setStore({ characters });
				} catch (error) {
					console.error("Error fetching characters:", error);
				}
			},
			
			loadPlanets: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/planets/');
					const data = await response.json();
					const results = data.results;
			
					const planets = [];
					const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms)); 
			
					for (let i = 0; i < results.length; i++) {
						try {
							const planetResponse = await fetch(`https://www.swapi.tech/api/planets/${results[i].uid}`);
							if (!planetResponse.ok) {
								throw new Error(`Failed to fetch planet with uid: ${results[i].uid}`);
							}
							const planetData = await planetResponse.json();
							planets.push(planetData.result);
			
							await delay(1000);
						} catch (error) {
							console.error("Error fetching planet:", error);
						}
					}
			
					setStore({ planets });
				} catch (error) {
					console.error("Error fetching planets:", error);
				}
			},
			
			loadStarships: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/starships');
					const data = await response.json();
					const results = data.results;
			
					const starships = [];
					const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms)); 
			
					for (let i = 0; i < results.length; i++) {
						try {
							const starshipResponse = await fetch(`https://www.swapi.tech/api/starships/${results[i].uid}`);
							if (!starshipResponse.ok) {
								throw new Error(`Failed to fetch starship with uid: ${results[i].uid}`);
							}
							const starshipData = await starshipResponse.json();
							starships.push(starshipData.result);
			
							await delay(1000);
						} catch (error) {
							console.error("Error fetching starship:", error);
						}
					}
			
					setStore({ starships });
				} catch (error) {
					console.error("Error fetching starships:", error);
				}
			},
			
			
			addCharacterFavorites: (character) => {
                const store = getStore();
                if (!store.favorites.some(fav => fav.uid === character.uid)) {
                    setStore({ favorites: [...store.favorites, character] });
                }
            },

            removeCharacterFavorites: (characterId) => {
                const store = getStore();
                setStore({ 
                    favorites: store.favorites.filter(fav => fav.uid !== characterId) 
                });
            }
		}
	};
};

export default getState;
