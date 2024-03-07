const baseURL ="https://swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets:[],
			people:[],
			starships:[],
		},
		actions: {
			getPeople: async () => {
				const response = await fetch(
					baseURL + "people?page=1&limit=100"
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
					baseURL + "planets?page=1&limit=100"
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
					baseURL + "starships?page=1&limit=100"
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
		}
	};
};

export default getState;
