<script setup lang="ts">

const props = defineProps(['image1', 'image2', 'title','content', 'align']);

</script>


<template>
    <div class="hero">
        <img :src="props.image1" class="hero__image">
        <img :src="props.image2" class="hero__image">
            
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
        grid-auto-flow: column;
        gap: 1em;

        @media only screen and (max-width: 1200px) {
            grid-auto-flow: row;
        }

        &__image {
            width: 100%;
        }
    }

    .content {
        width: fit-content;
        height: fit-content;
        padding: 2em;
        background: var(--bg-transparent);
        margin-top: -3em;
        max-width: 60em;
        text-align: center;
        position: absolute;
        justify-self: center;
        align-self: center;
    }

    .image {
        max-width: 100em;
        width: 100%;
    }
</style>
