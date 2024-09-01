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
