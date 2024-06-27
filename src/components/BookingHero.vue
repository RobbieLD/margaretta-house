<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>


<template>
    <div class="hero">
        <div class="content">
            <div class="title" style="margin-bottom: 1em;">MARGARETTA HOUSE</div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus lobortis scelerisque. 
                Vivamus dictum elit quis quam laoreet feugiat. Quisque porttitor ipsum in erat bibendum pellentesque.
                Integer luctus interdum augue ut feugiat. Proin non nunc euismod, facilisis nisi sed, vulputate metus.
                Mauris vitae dapibus velit, vel pulvinar nisi. Mauris vitae mauris quis arcu eleifend iaculis non sit amet lacus.
                Morbi odio lectus, pretium sed ligula vitae, tempor placerat mauris. Maecenas tempus vitae urna sit amet hendrerit.
            </div>
            <div>
                In hac habitasse platea dictumst. Ut cursus rhoncus lorem tincidunt vulputate. Ut eget lectus diam.
                Vestibulum et mauris bibendum, ultricies leo eu, cursus urna. Suspendisse potenti. Aliquam rhoncus vestibulum enim,
                id venenatis velit convallis sit amet. Integer vel sagittis sem, a venenatis arcu. Donec faucibus augue sit amet
                lacus posuere, quis dignissim lorem efficitur. Donec eros urna, lobortis vel aliquet maximus, finibus ut nulla.
                Sed quis maximus nibh, in mollis erat. Praesent ullamcorper lorem at massa placerat consectetur. Pellentesque
                placerat pulvinar iaculis. Quisque ac fermentum diam, sit amet facilisis justo. Curabitur ullamcorper nulla et
                nisl maximus, non porta risus dignissim. Sed orci lectus, lacinia ac felis nec, ullamcorper rutrum sem. Donec
                venenatis nulla enim, nec scelerisque sem maximus eget. 
            </div>
        </div>
        <div class="buttons">
            <RouterLink class="button" to="availability">Availability</RouterLink>
            <RouterLink class="button" to="bookings">Book Now</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .hero {
        margin-top: 4em;
        margin-bottom: 4em;
        display: grid;
        justify-content: center;
        align-content: center;
    }

    .content {
        max-width: 50em;
        text-align: center;
    }

    .buttons {
        display: grid;
        grid-auto-flow: column;
        justify-items: center;
        margin-top: 2em;
        font-variant: small-caps;
        font-size: 1.1em;
    }
</style>
