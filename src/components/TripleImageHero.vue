<script setup lang="ts">

const props = defineProps(['image1', 'image2', 'image3', 'title','content', 'align']);

</script>


<template>
    <div class="hero">

        <img :src="props.image1" class="hero__image hero__image-1">
        <img :src="props.image2" class="hero__image hero__image-2">
        <img :src="props.image3" class="hero__image hero__image-3">
            
        <div class="content">
            <div class="title">{{ props.title }}</div>
            <div>{{ props.content }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .hero {
        display: grid;
        margin-top: 5em;
        margin-bottom: 5em;
        justify-content: center;
        min-height: 30em;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        gap: 1em;

        @media only screen and (max-width: 1200px) {
            grid-template-columns: auto;
            grid-template-rows: auto auto auto auto;
        }

        &__image {
            width: 100%;

            &-1 {
                grid-column: 1;
                grid-row: 1;
            }

            &-2 {
                grid-column: 2;
                grid-row: 1;

                @media only screen and (max-width: 1200px) {
                    grid-row: 2;
                    grid-column: 1;
                }
            }

            &-3 {
                grid-column: 3;
                grid-row: 1;

                @media only screen and (max-width: 1200px) {
                    grid-row: 4;
                    grid-column: 1;
                }
            }
        }
    }

    .content {
        width: fit-content;
        height: fit-content;
        padding: 2em;
        background: white;
        margin-top: -3em;
        max-width: 60em;
        text-align: center;
        grid-row: 2;
        grid-column: 1/4;
        justify-self: center;

        @media only screen and (max-width: 1200px) {
            grid-row: 3;
            grid-column: 1;
            margin-bottom: -3em;
        }
    }

    .image {
        max-width: 100em;
        width: 100%;
    }
</style>
