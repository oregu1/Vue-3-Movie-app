<script setup>
const props = defineProps({
    movie: {
        type: Object,
        required: true
    },
});
</script>

<template>
    <div v-if="movie !== null" class="movie-item">
        <div class="movie-title">
            <h3>{{ movie.title }}</h3>
        </div>
        <div class="movie-poster" :style="`background-image: url(${movie.image})`"></div>
        <div class="movie-info">
            <span v-if="movie.imDbRating" class="movie-rating" :class="{
                green: movie.imDbRating >= 8,
                yellow: movie.imDbRating < 8 && movie.imDbRating >= 5,
                red: movie.imDbRating < 5
            }">
                {{ movie.imDbRating }}
            </span>
            <span class="movie-year">{{ movie.year }}</span>
        </div>
    </div>
    <p v-else>Ooops...there is no any movie</p>
</template>

<style lang="scss" scoped>
.movie-item {
    max-width: 250px;
    width: 100%;

    min-height: 340px;
    max-height: 400px;

    background-color: var(--movie-item-color);
    color: var(--white);

    padding: 10px;
    overflow: hidden;

    border-radius: 10px;

    .movie-poster {
        max-height: 260px;
        height: 100%;

        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;

    }

    .movie-title {
        width: 100%;
        max-height: 30px;
        height: 100%;

        display: flex;
        align-items: center;

        h3 {
            font-size: 14px;
            font-weight: 500;

            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }

    .movie-info {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        .movie-rating {
            font-weight: 700;

            &.green {
                color: var(--green);
            }

            &.yellow {
                color: var(--yellow);
            }

            &.red {
                color: var(--red);
            }
        }
    }
}
</style>