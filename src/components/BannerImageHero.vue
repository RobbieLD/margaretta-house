<script setup lang="ts">

const props = defineProps(['image', 'title','content'])

</script>


<template>
    <div class="hero">
        <div class="image" :style="{ backgroundImage: 'url(' + props.image + ')' }"></div>
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
        grid-template-columns: auto;
        grid-template-rows: 1fr auto;
    }

    .image {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 30em;
    }

    .content {
        width: fit-content;
        height: fit-content;
        text-align: center;
        padding: 2em;
        background: white;
        max-width: 40em;
        justify-self: center;
        align-self: end;
        margin-top: -3em;
    }
</style>
