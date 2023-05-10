import { ref } from "vue";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("SearchStore", () => {
  const movies = ref([]);

  //ACTIONS
  const searchMovies = async (search) => {
	const res = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_a1xripcz/${search}`)
	const data = await res.json()

	//console.log(data.results);

	movies.value = data.results;
    console.log(movies.value);
  }

  return { movies, searchMovies };
});
