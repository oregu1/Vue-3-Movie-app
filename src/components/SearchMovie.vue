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

        &:focus {
            border-color: var(--yellow);
        }
    }
}
</style>