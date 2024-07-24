<script setup lang="ts">

const props = defineProps(['image', 'title','content', 'justify', 'align'])

</script>


<template>
    <div class="hero" :style="{ backgroundImage: 'url(' + props.image + ')', justifyContent: props.justify, alignContent: props.align }">
        <div class="content">
            <div class="title">{{ props.title }}</div>
            <div>{{ props.content }}</div>
        </div>
    </div>
</template>

<style scoped>
    .hero {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: grid;
        min-height: 30em;
        padding: 1em;
        margin-top: 5em;
        margin-bottom: 5em;
    }

    .content {
        width: fit-content;
        height: fit-content;
        padding: 2em;
        background: var(--bg-transparent);
        max-width: 40em;
    }
</style>
