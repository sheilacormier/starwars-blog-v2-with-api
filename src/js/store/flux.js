const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://www.swapi.tech/api";
	return {
		store: {
			person: [],
			planets: [],
			starships: [],
			favorites: []
		},

		actions: {
			// Use getActions to call a function within a fuction

			initialize: () => {
				fetch(`${base_url}/people`)
					.then(res => res.json())
					.then(data => setStore({ person: data.results }));

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

			//this is for the demo view
			// changeColor: (index, color) => {
			//get the store
			// const store = getStore();

			//we have to loop the entire demo array to look for the respective index
			//and change its color
			// const demo = store.demo.map((elm, i) => {
			// 	if (i === index) elm.background = color;
			// 	return elm;
			// });

			//reset the global store
			// setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
