const baseURL ="https://swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets:[],
			people:[],
			starships:[],
			favorites:[],
		},
		actions: {
			getPeople: async () => {
				const response = await fetch(
					baseURL + "people?page=1&limit=25"
				);
				const body = await response.json();
				const people = body.results;
				setStore({
					people: people
				});
			},
			getPerson: async (id) => {
				const response = await fetch (
					baseURL + "people/" + id
				);
				const body = await response.json();
				const person = body.result;
				return person;
			},

			
			getPlanets: async () => {
				const response = await fetch(
					baseURL + "planets?page=1&limit=25"
				);
				const body = await response.json();
				const planets = body.results;
				setStore({
					planets: planets
				});
			},
			getPlanet: async (id) => {
				const response = await fetch (
					baseURL + "planets/" + id
				);
				const body = await response.json();
				const planet = body.result;
				return planet;
			},
			
			getStarships: async () => {
				const response = await fetch(
					baseURL + "starships?page=1&limit=25"
				);
				const body = await response.json();
				const starships = body.results;
				setStore({
					starships: starships
				});
			},
			getStarship: async (id) => {
				const response = await fetch (
					baseURL + "starships/" + id
				);
				const body = await response.json();
				const starship = body.result;
				return starship;
			},
			addFavorite: (name, uid, category) => {
				let newFavorite = {
					name: name,
					uid: uid,
					category: category
				}
				let store = getStore()
				store.favorites.push(newFavorite)
				setStore(store)
			},
			// deleteFavorite: (uid, category) => {
			// 	let store = getStore()
			// 	let newFavorites = store.favorites.filter(item => item.uid == uid && item.category == category)
			// 	setStore({favorites: newFavorites })
			// },
			deleteFavorite: (name, category) => {
				let store = getStore();
				let newFavorites = store.favorites.filter(item => item.name !== name || item.category !== category);
				setStore({ favorites: newFavorites });
			  }
		}
	};

};

export default getState;
