<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>


<template>
    <div class="hero">
        <div class="content">
            <div class="title" style="margin-bottom: 1em; text-align: center; padding-top: 1em;">WELCOME TO MARGARETTA HOUSE</div>
            <div class="content__body">
                An enchanting haven nestled on 43 acres of private land, including a walled garden, two wildlife ponds, and serene woodlands. Margaretta House is an exquisite estate that offers the perfect blend of luxury and tranquility. In it's own magical corner of Norfolk, it is just 10 minutes from King’s Lynn and not far from the late Queen’s beloved country home on the Sandringham Estate.
            </div>
            <div class="content__body">
                Traveling along the long, beautiful tree-lined driveway to Margaretta House, with the sun streaming through the trees, is a moment of entering another world. Arriving at the Georgian country house, which dates back to 1820, marks the beginning of your retreat.
            </div>
            <div class="content__body">
                The grounds also feature an outdoor heated swimming pool, fabulous hot tub, a superb new stable block, together with attractive ironwork estate-fenced paddocks and a ménage, a children’s play area, and even a camping pod in its woodland.
            </div>
        </div>
        <div class="buttons">
            <RouterLink class="button" to="booking">Book Now</RouterLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .hero {
        margin-top: -8em;
        margin-bottom: 4em;
        display: grid;
        justify-content: center;
        align-content: center;
        position: relative;
        z-index: 9;
    }

    .content {
        max-width: 60em;
        background-color: white;
        padding: 1em;
        
        &__body {
            margin-left: 1em;
            margin-right: 1em;
            margin-bottom: 1em;
        }
    }

    .buttons {
        display: grid;
        grid-auto-flow: column;
        justify-items: center;
        margin-top: 2em;
        font-variant: small-caps;
        font-size: 1.1em;

        @media only screen and (max-width: 800px) {
            grid-auto-flow: row;
            gap: 1em;
        }
    }
</style>
