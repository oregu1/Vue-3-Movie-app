<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useMoviesStore } from './stores/MoviesStore';
//REFS
import { ref, onMounted } from 'vue';

//COMPONENTS
import MovieItem from './components/MovieItem.vue';
import SearchMovie from './components/SearchMovie.vue';

//STORES
const moviesStore = useMoviesStore();

onMounted(() => {
	moviesStore.getPopularMovies();
});
</script>

<template>
	<div class="wrapper">
		<div class="searched-movies">
			<h2>Searched movies</h2>
			<SearchMovie />
		</div>
		<div class="most-popular-movies">
			<h2>Most Popular Movies</h2>
			<div class="movies">
				<MovieItem v-for="movie in moviesStore.movies" :key="movie.id" :movie="movie" />
			</div>
		</div>
	</div>

	<RouterView />
</template>

<style lang="scss">
.wrapper {
	max-width: 1280px;
	width: 100%;
	margin: auto;

	display: flex;
	flex-direction: column;
}

.movies {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 5px;
}
</style>
