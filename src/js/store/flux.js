const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://starwars-blog-api.herokuapp.com";
	return {
		store: {
			person: [],
			planets: [],
			starships: [],
			favorites: []
		},

		actions: {
			// Use getActions to call a function within a function

			initialize: () => {
				fetch(`${base_url}/people`)
					.then(res => res.json())
					.then(data => setStore({ person: data.people }));

				fetch(`${base_url}/planets`)
					.then(res => res.json())
					.then(data => setStore({ planets: data.planets }));

				fetch(`${base_url}/starships`)
					.then(res => res.json())
					.then(data => setStore({ starships: data.starships }));
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
				//and filter data
				let favorites = store.favorites.filter((item, i) => i !== index);
				//reset the global store
				setStore({ favorites: favorites });
			},

			countFavorites: () => {
				//get the store
				const store = getStore();
				//and count data
				const length = store.favorites.length;
				//return results
				return length;
			}
		}
	};
};

export default getState;
