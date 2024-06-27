<script setup lang="ts">

const props = defineProps<{
    title?: string,
    content?: string,
    images?: string[]
}>();

</script>


<template>
    <div class="hero">
        <div class="content">
            <div class="title">{{ props.title }}</div>
            <div>{{ props.content }}</div>
        </div>
        <div class="images">
            <img v-for="(image, index) of props.images" :key="index" :src="image" class="images__image" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .hero {
        display: grid;
        margin-top: 5em;
        margin-bottom: 10em;
        justify-content: center;
        padding-top: 5em;
        background-color: var(--primary-color);
        color: var(--on-primary-color);
    }

    .content {
        width: fit-content;
        height: fit-content;
        padding: 2em;
        margin-top: -3em;
        width: 60em;
        justify-self: center;
        text-align: center;
    }

    .images {
        display: grid;
        grid-auto-flow: column;
        gap: 2em;
        margin-bottom: -5em;
        &__image {
            max-width: 20em;
        }
    }
</style>
