<script setup lang="ts">
import BannerImageHero from '@/components/BannerImageHero.vue';
import BookingHero from '@/components/BookingHero.vue';
import SingleImageHero from '@/components/SingleImageHero.vue';
import QuadImageHero from '@/components/QuadImageHero.vue';
</script>

<template>
    <div>
        <video class="video" src="/hero.mp4" loop autoplay muted playsinline webkit-playsinline></video>
        <BookingHero></BookingHero>
        <BannerImageHero title="Traditional Charm" content="Old world charm with modern comforts and technology" image="conservatory.jpg" justify="start" align="center"></BannerImageHero>
        <SingleImageHero title="Classic Luxury" image="bathroom.jpg" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus lobortis scelerisque. Vivamus dictum elit quis quam laoreet feugiat. Quisque porttitor ipsum in erat bibendum pellentesque. Integer luctus interdum augue ut feugiat. Proin non nunc euismod, facilisis nisi sed, vulputate metus. Mauris vitae dapibus velit, vel pulvinar nisi. Mauris vitae mauris quis arcu eleifend iaculis non sit amet lacus. Morbi odio lectus, pretium sed ligula vitae, tempor placerat mauris. Maecenas tempus vitae urna sit amet hendrerit. "></SingleImageHero>
        <BannerImageHero title="Natural Tranquility" content="Relax in the peaceful natural surroundings and reconnect with nature" image="nature.jpg" justify="end" align="center"></BannerImageHero>
        <QuadImageHero title="Relax and Recharge" :images="['/mirror.jpg','/pool.jpg', '/clock.jpg', '/window.jpg']" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus lobortis scelerisque. Vivamus dictum elit quis quam laoreet feugiat. Quisque porttitor ipsum in erat bibendum pellentesque. Integer luctus interdum augue ut feugiat. Proin non nunc euismod, facilisis nisi sed, vulputate metus. Mauris vitae dapibus velit, vel pulvinar nisi. Mauris vitae mauris quis arcu eleifend iaculis non sit amet lacus. Morbi odio lectus, pretium sed ligula vitae, tempor placerat mauris. Maecenas tempus vitae urna sit amet hendrerit. "></QuadImageHero>
    </div>
</template>

<style scoped>  
    .video {
        width: 100%;
    }
</style>
