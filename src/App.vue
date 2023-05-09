<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useMoviesStore } from './stores/MoviesStore';
import { onMounted } from 'vue';

//COMPONENTS
import MovieItem from './components/MovieItem.vue';

const moviesStore = useMoviesStore();

onMounted(() => {
	moviesStore.getPopularMovies();
});
</script>

<template>
	<div class="wrapper">
		<div class="movies">
			<MovieItem 
				v-for="movie in moviesStore.movies" 
				:movie="movie"
			/>
		</div>
	</div>

	<RouterView />
</template>

<style scoped>
.wrapper {
	max-width: 1280px;
	width: 100%;
	margin: auto;
}
.movies {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 5px;
}
</style>
