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
			
					const characterPromises = results.map(async (result) => {
						const characterResponse = await fetch(`https://www.swapi.tech/api/people/${result.uid}`);
						const characterData = await characterResponse.json();
						return characterData.result;
					});
			
					const characters = await Promise.all(characterPromises);
					setStore({ characters });
				} catch (error) {
					console.error("Error fetching characters:", error);
				}
			},
			loadPlanets: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/planets/');
					if (!response.ok) throw new Error("Failed to fetch planets list");
			
					const data = await response.json();
					const results = data.results;
					console.log('Results:', results);
			
					const planetPromises = results.map(async (result) => {
						const planetResponse = await fetch(`https://www.swapi.tech/api/planets/${result.uid}`);
						if (!planetResponse.ok) throw new Error(`Failed to fetch planet with uid: ${result.uid}`);
			
						const planetData = await planetResponse.json();
						return planetData.result;
					});
			
					const planets = await Promise.all(planetPromises);
					console.log('Planets:', planets);
			
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
			
					const starshipPromises = results.map(async (result) => {
						const starshipResponse = await fetch(`https://www.swapi.tech/api/starships/${result.uid}`);
						const starshipData = await starshipResponse.json();
						return starshipData.result;
					});
			
					const starships = await Promise.all(starshipPromises);
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
