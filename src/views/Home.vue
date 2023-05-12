<script setup>
import { RouterLink, RouterView } from 'vue-router';

import { useMoviesStore } from '../stores/MoviesStore';
//REFS
import { ref, computed, onMounted } from 'vue';

import MovieItem from '../components/MovieItem.vue';
import SearchMovie from '../components/SearchMovie.vue';

//STORES
const moviesStore = useMoviesStore();

onMounted(() => {
    moviesStore.getPopularMovies();
});
</script>

<template>
    <header class="header">
        <div class="logo-section">
            <div class="logo">
                <img src="../assets/img/movie-logo.png" alt="logo"/>
            </div>
            <p>Movie-app</p>
        </div>
        <nav class="nav">
            <router-link to="">Home</router-link>
            <router-link to="">Top 250 movies</router-link>
            <router-link to="">Most popular</router-link>
        </nav>
    </header>
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
</template>

<style lang="scss">
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 80px;

    background-color: var(--movie-item-color);

    margin-bottom: 15px;
    padding: 0 15px;

    .logo-section {
        max-width: 200px;
        width: 100%;

        display: flex;
        align-items: center;

        .logo {
            max-width: 70px;
            width: 100%;

            img {
                width: 100%;
            }
        }

        p {
            font-weight: 500;
            font-size: 20px;
            margin-left: 10px;
        }
    }

    .nav>a {
        margin-right: 10px;

        &:last-child {
            margin-right: 0;
        }
    }
}

.wrapper {
    max-width: 1280px;
    width: 100%;
    margin: auto;

    display: flex;
    flex-direction: column;

    padding: 0 15px;
}

.movies {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 5px;

    border-bottom: 1px solid rgba($color: #ffffff, $alpha: .3);

    padding-bottom: 10px;
}
</style>