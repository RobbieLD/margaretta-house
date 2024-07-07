<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterView, useRouter } from 'vue-router'
import { useCookies } from 'vue3-cookies';

const year = new Date().getFullYear();
const menuOpen = ref(false);
const version = ref('LOCAL');
const router = useRouter();
const { cookies } = useCookies();
const hideHeader = ref(false);
const atTop = ref(true);
const mouseHeader = ref(false)

let scrollPos = 0;

onMounted(() => {
    version.value = import.meta.env.VITE_VERSION;
    isAuth.value = !!cookies.get("auth");

    window.addEventListener('scroll', () => {
        if ((document.body.getBoundingClientRect()).top > scrollPos) {
            hideHeader.value = false;
        } else {
            hideHeader.value = true;
        }

        scrollPos = (document.body.getBoundingClientRect()).top;

        atTop.value = scrollPos >= 0;

        console.log(atTop.value);
    });

    // https://github.com/nuxt/nuxt/issues/13471
    setTimeout(() => {
        const header = document.getElementsByTagName("header")[0];

        if (!header) {
            console.log("dom not loaded");
            return;
        }

        header.addEventListener("mouseout", () => {
            mouseHeader.value = false;
        });

        header.addEventListener("mouseenter", () => {
            mouseHeader.value = true;
        });
    }, 100);
});

router.beforeEach(() => {
    menuOpen.value = false
});

// TEMP CODE
const isAuth = ref(false);
const authCount = ref(0);

const updateCount = () => {
    authCount.value++;

    if (authCount.value >= 3) {
        isAuth.value = true;
        cookies.set("auth", "true")
    }
}

</script>

<template>
    <div v-if="!isAuth" class="soon" @click="updateCount" @touchend="updateCount">Coming Soon</div>
    <header v-if="isAuth" class="header" :class="{ 'header--hidden' : hideHeader, 'header--at-top' : atTop && !mouseHeader }">            
        <div class="menu" :class="{ 'menu--at-top' : atTop && !mouseHeader }">
            <RouterLink to="/" v-if="router.currentRoute.value.path != '/'">Home</RouterLink>
            <RouterLink to="booking">Bookings</RouterLink>
            <!-- <RouterLink to="availability">Availability</RouterLink> -->
            <RouterLink to="contact">Contact</RouterLink>
            <RouterLink to="local">Local Attractions</RouterLink>
            <RouterLink to="location">Location</RouterLink>
        </div>
        
        <div class="logo">
            <img :src="atTop && !mouseHeader ? '/logo_w.png' : '/logo_b.png'"/>
        </div>
        
        <div class="socials">
            <a target="_blank" href="https://facebook.com" class="socials__icon">
                <font-awesome-icon :icon="['fab', 'square-facebook']" class="socials__icon" :class="{'socials__icon--at-top' : atTop && !mouseHeader }" />
            </a>
            <a target="_blank" href="https://x.com">
                <font-awesome-icon :icon="['fab', 'square-twitter']" class="socials__icon" :class="{'socials__icon--at-top' : atTop && !mouseHeader }"/>
            </a>
            <a target="_blank" href="https://instagram.com">
                <font-awesome-icon :icon="['fab', 'square-instagram']" class="socials__icon" :class="{'socials__icon--at-top' : atTop && !mouseHeader }"/>
            </a>
        </div>

        <div class="burger" :class="{ 'burger--at-top' : atTop && !mouseHeader }" @click="() => menuOpen = !menuOpen" @touchend="() => menuOpen = !menuOpen">
            <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
        <div class="mobile-menu" :class="{ 'mobile-menu--open': menuOpen }">
            <RouterLink to="/" class="mobile-menu__link" v-if="router.currentRoute.value.path != '/'">Home</RouterLink>
            <RouterLink to="booking" class="mobile-menu__link">Bookings</RouterLink>
            <!-- <RouterLink to="availability" class="mobile-menu__link">Availability</RouterLink> -->
            <RouterLink to="contact" class="mobile-menu__link">Contact</RouterLink>
            <RouterLink to="local" class="mobile-menu__link">Local Attractions</RouterLink>
            <RouterLink to="location" class="mobile-menu__link mobile-menu__link--end">Location</RouterLink>

            <div class="mobile-menu__socials">
                <a target="_blank" href="https://facebook.com">
                    <font-awesome-icon :icon="['fab', 'square-facebook']" class="socials__icon" />
                </a>
                <a target="_blank" href="https://x.com">
                    <font-awesome-icon :icon="['fab', 'square-twitter']" class="socials__icon"/>
                </a>
                <a target="_blank" href="https://instagram.com">
                    <font-awesome-icon :icon="['fab', 'square-instagram']" class="socials__icon"/>
                </a>
            </div>
        </div>
    </header>
    <main v-if="isAuth" class="main">
        <RouterView />
    </main>
    <footer v-if="isAuth" class="footer">
        <div class="footer__address">
            <div>MARGARETTA HOUSE</div>
            <div>102 Main Rd</div>
            <div>Clenchwarton</div>
            <div>King's Lynn</div>
            <div>PE34 4BG</div>
        </div>
        <div class="footer__copyright">
            <div>
                ©{{ year }}. Margaretta House. All rights reserved.
            </div>
            <div>
                Version: {{ version }}
            </div>
        </div>
    </footer>
</template>

<style lang="scss">

    :root {
        --primary-color: rgb(88, 123, 11);
        --primary-color-light: rgb(155, 202, 53);
        --on-primary-color: rgb(255, 255, 255);

        --secondary-color: rgb(38, 35, 31);
        --secondary-color-light: rgb(82, 69, 54);
        --on-secondary-color: rgb(179, 179, 179);

        --bg-color: #fff9f3;
        --header-bg-color: rgb(255, 255, 255);

        --title-font: Portrait-Regular;

        --ldg-component-button-contrast-color: red !important;
    --ldg-component-button-contrast-color: red !important;
    --ldg-component-button-hover-color: blue !important;
    
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font: 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background-color: var(--bg-color);
        scroll-behavior: smooth;
    }

    #app {
        display: grid;
        grid-template-rows: 1fr 20em;
        min-height: 100vh;
    }

    .mobile-menu {
        display: none;
        position: absolute;
        background-color: var(--header-bg-color);
        padding-left: 2em;
        padding-right: 2em;
        justify-content: center;
        padding-top: 2em;
        padding-bottom: 2em;
        right: 0;
        top: 4em;
        border-bottom: solid 1px var(--secondary-color);
        border-left: solid 1px var(--secondary-color);
        border-top: solid 1px var(--secondary-color);

        &__socials {
            display: grid;
            grid-auto-flow: column;
            gap: 1em;
            justify-content: center;
            margin-top: 1em;

            & a {
                font-size: 2em;
            }
        }

        &__link {
            text-decoration: none;
            color: var(--primary-color);
            padding-top: 1em;
            padding-bottom: 1em;
            padding-left: 1em;
            padding-right: 1em;
            font-variant: small-caps;
            letter-spacing: 0.2em;
            border-top: solid 1px var(--secondary-color);

            &:hover {
                background-color: var(--primary-color);
                color: var(--on-primary-color);
            }

            &--end {
                border-bottom: solid 1px var(--secondary-color);
            }
        }
        
        &--open {
            display: grid;
        }
    }

    .page-banner {
        margin-bottom: 4em;
        max-width: 100%;
    }

    .header {
        height: 5em;
        width: 100vw;
        z-index: 9;
        background-color: var(--header-bg-color);
        position: fixed;
        display: grid;
        grid-template-columns: auto 1fr auto;
        border-bottom: solid 1px var(--secondary-color);
        transition: all 500ms ease-in-out;

        &--at-top {
            background: none;
            border: none;
        }

        &--hidden {
            top: -5em
        }
    }

    .main {
        grid-row: 1;
    }

    .footer {
        grid-row: 2;
        background-color: var(--secondary-color);
        color: var(--on-secondary-color);
        padding: 3em;
        padding-top: 5em;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: auto 1fr;

        &__copyright {
            grid-column: 1/3;
            grid-row: 2;
            justify-content: center;
            font-size: 0.7em;
            display: grid;
        }

        &__address {
            grid-column: 1;
            grid-row: 1;
            font-size: 0.9em;
            height: fit-content;
            gap: 0.2em;
        }
    }

    .menu {
        display: grid;
        margin-left: 2em;
        grid-auto-flow: column;
        grid-column: 1;
        align-items: center;

        &--at-top a {
            color: white !important;
            border-left: solid 1px white !important;

            &:last-child {
                border-right: solid 1px white !important;
            }
        }

        & a {
            text-decoration: none;
            color: var(--primary-color);
            font-variant: small-caps;
            letter-spacing: 0.2em;
            padding-left: 1em;
            padding-right: 1em;
            border-left: solid 1px var(--secondary-color);
            padding-top: 0.5em;
            padding-bottom: 0.5em;

            &:last-child {
                border-right: solid 1px var(--secondary-color);
            }

            &:hover {
                background-color: var(--primary-color);
                color: var(--on-primary-color);
            }
        }

        @media only screen and (max-width: 1450px) {
            display: none;
        }

    }

    .router-link-active {
        background-color: var(--primary-color) !important;
        color: var(--on-primary-color) !important;
    }

    .socials {
        display: grid;
        grid-auto-flow: column;
        gap: 1em;
        grid-column: 4;
        margin-right: 2em;
        align-items: center;

        & svg {
            font-size: 2em;
        }

        &__icon {
            color: var(--secondary-color);
            
            &--at-top {
                color: white;
            }

            &:hover {
                color: var(--primary-color);    
            }
        }

        @media only screen and (max-width: 1450px) {
            display: none;
        }
    }

    .burger {
        display: none;

        grid-column: 4;
        align-self: center;
        margin-right: 2em;
        cursor: pointer;

        &--at-top {
            color: white;
        }

        & svg {
            font-size: 2em;
        }

        &:hover {
            color: var(--primary-color);
        }

        @media only screen and (max-width: 1450px) {
            display: block;
        }
    }

    .logo {
        position: fixed;
        width: 100%;
        display: grid;
        justify-content: center;
        z-index: -1;

        & img {
            height: 5em;
        }
    }

    .button {
        text-decoration: none;
        background: var(--primary-color);
        padding: 1em 2em 1em 2em;
        color: var(--on-primary-color);
        letter-spacing: 0.2em;
        font-variant: small-caps;
        font-size: 1.1em;

        &:hover {
            background: var(--primary-color-light);
        }
    }

    .title {
        font-family: var(--title-font);
        font-size: 3em;
        font-variant: small-caps;
    }

    .soon {
        display: grid;
        justify-content: center;
        align-content: center;
        font-size: 2em;
        text-align: center;
    }

</style>
