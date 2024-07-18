<script setup lang="ts">
import BannerImageHero from '@/components/BannerImageHero.vue';
import BookingHero from '@/components/BookingHero.vue';
import SingleImageHero from '@/components/SingleImageHero.vue';
import QuadImageHero from '@/components/QuadImageHero.vue';
</script>

<template>
    <div class="container">
        <video class="video" src="/hero.mp4" loop autoplay muted playsinline webkit-playsinline></video>
        <BookingHero></BookingHero>
        <BannerImageHero title="Accommodation" content="Margaretta House boasts six beautifully appointed bedrooms, including the stunning corner master bedroom with fabulous far-reaching double aspect views, an ensuite bathroom and a dressing room. Each bedroom is designed to provide a restful and elegant atmosphere. With three spacious bathrooms, guests can enjoy both comfort and convenience throughout their stay." image="trees.jpg" justify="start" align="center"></BannerImageHero>
        <SingleImageHero title="Dining & Entertaining" image="kitchen.jpg" content="The heart of Margaretta House is its informal farmhouse kitchen, complemented by a grand dining room that comfortably seats up to 18 guests. Whether you're hosting a formal dinner or a casual gathering, the space provides the perfect backdrop for unforgettable meals and celebrations."></SingleImageHero>
        <BannerImageHero title="Amenities" content="Swimming Pool & Hot Tub: Relax and unwind in our outdoor swimming pool or soak in the hot tub while surrounded by the natural beauty of our expansive grounds." image="amenaties.jpg" justify="end" align="center"></BannerImageHero>
        <QuadImageHero title="Gardens & Woodlands" :images="['/clock.jpg','/driveway.jpg', '/pond.jpg', '/weddingcake.jpg']" content="Explore the gardens, wildlife ponds, and woodlands that envelop Margaretta House. These 43 acres offer a peaceful retreat in natural beauty, home to deer, hedgehogs, and beautiful birds. Margaretta House invites you to experience the charm and elegance of this unique property. Whether you're planning a family reunion, a special celebration, or a peaceful escape, Margaretta House promises a memorable stay."></QuadImageHero>
    </div>
</template>

<style scoped lang="scss">  
    .video {
        width: 100%;

        @media only screen and (max-width: 850px) {
            width: 200%;
            margin-left: -50%;
        }
    }

    .container {
        @media only screen and (max-width: 850px) {
            overflow-x: hidden;
        }
    }
</style>
