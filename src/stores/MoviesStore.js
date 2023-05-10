import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("MoviesStore", () => {
  const movies = ref([]);

  //ACTIONS
  const getPopularMovies = async () => {
	const res = await fetch("https://imdb-api.com/en/API/MostPopularMovies/k_a1xripcz")
	const data = await res.json()

	console.log(data.items);

	movies.value = data.items;
  }

  return { movies, getPopularMovies };
});
