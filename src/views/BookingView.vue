<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
    const logify = document.createElement('script');
    logify.setAttribute('src', 'https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js');
    document.head.appendChild(logify);
});
</script>

<template>
    <div class="page-title" style="background-image: url('/garden.jpg');">
        <span class="page-title__title">
            Bookings
        </span>
    </div>
    <div class="booking-container">
        <div class="title" style="text-align: center;">Check Availability</div>
        <div
        id="lodgify-search-bar"
        data-website-id="526560"
        data-language-code="en"
        data-checkout-page-url="https://checkout.lodgify.com/andrew-venz/en/#/592246"
        
        data-dates-check-in-label="Arrival"
        data-dates-check-out-label="Departure"
        data-guests-counter-label="Guests"
        data-guests-input-singular-label="{{NumberOfGuests}} guest"
        data-guests-input-plural-label="{{NumberOfGuests}} guests"
        data-location-input-label="Location"
        data-search-button-label="Search"
        
        data-new-tab="true"
        data-version="stable"
        ></div>
    </div>
    
</template>

<style lang="scss">
 :root {
    --ldg-psb-background: #ffffff;
    --ldg-psb-padding: 2em;
    --ldg-psb-input-background: #ffffff;
    --ldg-psb-button-border-radius: 3.58em;
    --ldg-psb-color-primary: var(--primary-color);
    --ldg-psb-color-primary-lighter:var(--primary-color-light);
    --ldg-psb-color-primary-darker: var(--primary-color-light);
    --ldg-component-button-contrast-color: red !important;
    --ldg-component-button-contrast-color: red !important;
    --ldg-component-button-hover-color: blue !important;
    --ldg-psb-color-primary-contrast: var(--secondary-color);
    --ldg-semantic-color-primary:  var(--primary-color);
    --ldg-semantic-color-primary-lighter: var(--primary-color-light);
    --ldg-semantic-color-primary-darker: var(--primary-color-light);
    --ldg-semantic-color-primary-contrast: var(--secondary-color);
 }

 .booking-container {
    background-color: white;
    padding-top: 2em;
    padding-bottom: 2em;
    justify-items: center;
    display: grid;
    grid-auto-flow: row;
 }
 
 #lodgify-search-bar { 
    margin-right: 4em;
    margin-left: 0;

    a {
        color: var(--on-primary-color) !important;
    }
}
</style>