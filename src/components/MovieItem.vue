<script setup>
const props = defineProps({
    movie: {
        type: Object,
        required: true
    },
});
</script>

<template>
    <div class="movie-item">
        <div class="movie-title">
            <h3>{{ movie.title }}</h3>
        </div>
        <div class="movie-poster">
            <img :src="movie.image" alt="" />
        </div>
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
</template>

<style lang="scss" scoped>
.movie-item {
    max-width: 250px;
    width: 100%;

    min-height: 380px;

    background-color: var(--black);
    color: var(--white);

    padding: 10px;
    overflow: hidden;

    .movie-poster {
        max-height: 300px;
        height: 100%;

        img {
            width: 100%;
        }
    }

    .movie-title {
        width: 100%;
        max-height: 40px;
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