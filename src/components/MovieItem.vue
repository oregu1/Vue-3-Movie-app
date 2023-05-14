<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps({
    movie: {
        type: Object,
        required: true
    },
});

const handleClick = () => {
    alert('Soon here will appear more content. Be patient :)')
};
</script>

<template>
    <div v-if="movie !== null" class="movie-item">
        <div class="movie-title">
            <h3>{{ movie.title }}</h3>
            <span v-if="movie.imDbRating" class="movie-rating" :class="{
                green: movie.imDbRating >= 8,
                yellow: movie.imDbRating < 8 && movie.imDbRating >= 5,
                red: movie.imDbRating < 5
            }">
                {{ movie.imDbRating }}
            </span>
        </div>
        <div class="movie-poster" :style="`background-image: url(${movie.image})`"></div>
        <div class="movie-info">
            <button class="movie-trailer-btn btn" @click="handleClick">
                <Icon icon="material-symbols:play-circle-outline-rounded" width="24" height="24"/>
                <p>Trailer</p>
            </button>
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
        justify-content: space-between;

        h3 {
            font-size: 14px;
            font-weight: 500;

            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

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

    .movie-info {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

       .btn {
        background-color: transparent;
        outline: none;
        border: none;
        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        color: var(--yellow);

        padding:0 5px;

        cursor: pointer;

        &:hover {
            background-color: var(--yellow);
            color: var(--black);
            

            svg {
                fill: var(--black);
            }

            p {
                font-weight: 500;
            }
        }

        p {
            margin-left: 5px;
        }
       }
    }
}
</style>