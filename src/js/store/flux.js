const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://www.swapi.tech/api";
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: []
		},

		actions: {
			// Use getActions to call a function within a fuction

			initialize: () => {
				fetch(`${base_url}/people`)
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }));

				fetch(`${base_url}/planets`)
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));

				fetch(`${base_url}/starships`)
					.then(res => res.json())
					.then(data => setStore({ starships: data.results }));
			},

			addFavorite: data => {
				//get the store
				const store = getStore();
				//and pushes data
				store.favorites.push(data);
				//reset the global store
				setStore(store);
			},

			removeFavorite: index => {
				//get the store
				const store = getStore();
				//and pushes data
				let favorites = store.favorites.filter((item, i) => i !== index);
				//reset the global store
				setStore({ favorites: favorites });
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
			}
		}
	};
};

export default getState;
