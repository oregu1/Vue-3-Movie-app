<script setup>
import { RouterLink, RouterView } from 'vue-router';

import { useMoviesStore } from '../stores/MoviesStore';
//REFS
import { ref, computed, onMounted } from 'vue';

//COMPONENTS
import MovieItem from '../components/MovieItem.vue';
import SearchMovie from '../components/SearchMovie.vue';
import Trailer from '../components/Trailer.vue';

//STORES
const moviesStore = useMoviesStore();

const getTrailerID = (movieID) => {
    console.log(movieID);
};

onMounted(() => {
    moviesStore.getPopularMovies();
});
</script>

<template>
    <header class="header">
        <div class="logo-section">
            <div class="logo">
                <img src="../assets/img/movie-logo.png" alt="logo" />
            </div>
            <p>Movie-app</p>
        </div>
        <nav class="nav">
            <router-link class="nav-links" to="/">Home</router-link>
            <router-link class="nav-links" to="">Top 250 movies</router-link>
            <router-link class="nav-links" to="#most-popular-movies">Most popular</router-link>
        </nav>
    </header>
    <div class="wrapper">
        <div class="searched-movies">
            <h2>Searched movies</h2>
            <SearchMovie />
        </div>
        <div class="most-popular-movies">
            <h2>Most Popular Movies</h2>
            <div class="movies" id="most-popular-movies">
                <MovieItem 
                    v-for="movie in moviesStore.movies" 
                    :key="movie.id" 
                    :movie="movie" 
                />
            </div>
        </div>
        <Trailer 
            v-for="movie in moviesStore.movies"
            :key="movie.id"
            :movieID="movie.id"
            @get-trailer-id="getTrailerID"
        />
    </div>
</template>

<style lang="scss">
body {
    background-color: var(--black);
    position: relative;
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
    grid-template-columns: repeat(6, minmax(200px, 1fr));
    grid-gap: 5px;

    border-bottom: 1px solid rgba($color: #ffffff, $alpha: .3);

    padding-bottom: 10px;
}

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

    .nav>a.nav-links {
        margin-right: 10px;
        padding: 5px 10px;

        text-decoration: none;

        color: var(--white);
        background-color: var(--black);

        border-radius: 5px;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            color: var(--yellow);
        }
    }
}
</style>