<script setup>
//COMPONENTS
import MovieItem from './MovieItem.vue'
//REFS
import { ref } from 'vue';
//STORES
import { useSearchStore } from '../stores/SearchStore';

const searchStore = useSearchStore();
const search = ref('');

</script>

<template>
    <form class="search-form" @submit.prevent="searchStore.searchMovies(search)">
        <input type="text" placeholder="Search a movie" v-model="search">
    </form>
    <p class="notification" v-if="searchStore.movies.length === 0">Oooops...it looks like you didn't look for any movies</p>
    <div class="movies">
        <MovieItem v-for="movie in searchStore.movies" :key="movie.id" :movie="movie" />
    </div>
</template>

<style lang="scss" scoped>
form.search-form {
    margin: 10px auto;
    max-width: 600px;
    width: 100%;

    input {
        width: 100%;
        padding: 10px 15px;

        border-radius: 10px;
        border: 1px solid var(--black);
        outline: none;

        color: var(--black);

        &:focus {
            border-color: var(--yellow);
        }

        &::placeholder {
            color: var(--black);
        }
    }
}

.notification {

    font-weight: 300;
    font-size: 20px;

    text-align: center;
    color: rgba($color: #fff, $alpha: .5);
}
</style>