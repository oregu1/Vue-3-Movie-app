<script setup>
    const props = defineProps({
        movieID: {
            type: Number,
            required: true
        },
        /*isActive: {
            type: Boolean,
            required: true
        }*/
    })
let URL = "https://imdb-api.com/en/API/YouTubeTrailer/k_a1xripcz/";
</script>

<template>
    <div class="trailer-box">
        <div class="trailer">
            <iframe 
                class="trailer-iframe" 
                height="345" 
                :src="`${URL}${movieID}`"
                allowfullscreen
            >
            </iframe>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.trailer-box {
    width: 100%;
    height: 100%;

    background-color: rgba(#000, $alpha: .4);

    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -41%);

    display: none;
    &.is-active {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .trailer {
        max-width: 560px;
        width: 100%;

        background-color: var(--black);
        border-radius: 5px;

        iframe {
            width: 100%;
            border: none;
        }
    }
}
</style>