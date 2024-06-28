<script setup lang="ts">

const props = defineProps(['image', 'title','content']);

</script>


<template>
    <div class="hero">
        <img :src="props.image" class="image" />
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
    }

    .content {
        width: fit-content;
        height: fit-content;
        padding: 2em;
        background: #ffffff;
        margin-top: -3em;
        max-width: 60em;
        justify-self: center;
        text-align: center;
    }

    .image {
        max-width: 100em;
        width: 100%;
    }
</style>
