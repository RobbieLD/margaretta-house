<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterView, useRouter } from 'vue-router'
import { useCookies } from 'vue3-cookies';

const year = new Date().getFullYear();
const menuOpen = ref(false);
const version = ref('LOCAL');
const router = useRouter();
const { cookies } = useCookies();

onMounted(() => {
    version.value = import.meta.env.VITE_VERSION;
    isAuth.value = !!cookies.get("auth");
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
    <header v-if="isAuth" class="header">            
        <div class="menu">
            <RouterLink to="/" v-if="router.currentRoute.value.path != '/'">Home</RouterLink>
            <RouterLink to="booking">Bookings</RouterLink>
            <RouterLink to="contact">Contact</RouterLink>
            <RouterLink to="local">Local Attractions</RouterLink>
            <RouterLink to="location">Location</RouterLink>
        </div>
        
        <div class="socials">
            <a target="_blank" href="https://www.facebook.com/share/k6iFdcqRQXribEY6/?mibextid=LQQJ4d" class="socials__icon">
                <font-awesome-icon :icon="['fab', 'square-facebook']" class="socials__icon" />
            </a>
            <a target="_blank" href="https://www.instagram.com/thelizvenz?igsh=Mmd5aGF3eTF2YWdi&utm_source=qr">
                <font-awesome-icon :icon="['fab', 'square-instagram']" class="socials__icon" />
            </a>
        </div>

        <div class="burger" @click="() => menuOpen = !menuOpen" @touchend="() => menuOpen = !menuOpen">
            <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
        <div class="mobile-menu" :class="{ 'mobile-menu--open': menuOpen }">
            <RouterLink to="/" class="mobile-menu__link" v-if="router.currentRoute.value.path != '/'">Home</RouterLink>
            <RouterLink to="booking" class="mobile-menu__link">Bookings</RouterLink>
            <RouterLink to="contact" class="mobile-menu__link">Contact</RouterLink>
            <RouterLink to="local" class="mobile-menu__link">Local Attractions</RouterLink>
            <RouterLink to="location" class="mobile-menu__link mobile-menu__link--end">Location</RouterLink>

            <div class="mobile-menu__socials">
                <a target="_blank" href="https://www.facebook.com/share/k6iFdcqRQXribEY6/?mibextid=LQQJ4d">
                    <font-awesome-icon :icon="['fab', 'square-facebook']" class="socials__icon" />
                </a>
                <a target="_blank" href="https://www.instagram.com/thelizvenz?igsh=Mmd5aGF3eTF2YWdi&utm_source=qr">
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
            <div>Margaretta House</div>
            <div>100 Main Rd</div>
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

        --bg-color: #fff3e5;
        --header-bg-color: rgb(255, 255, 255);

        --bg-transparent: #ffffffcf;

        --title-font: Portrait-Regular;
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
        grid-template-rows: auto 1fr 20em;
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
        display: grid;
        grid-template-columns: auto 1fr auto;
        border-bottom: solid 1px var(--secondary-color);
        grid-row: 1;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        background-image: url('/logo_b.png');
    }

    .main {
        grid-row: 2;
    }

    .footer {
        grid-row: 3;
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

    .page-title {
        height: 10em;
        background-size: cover;
        width: 100%;
        font-size: 2em;
        display: grid;
        justify-content: center;
        align-content: center;
        background-position: center;

        &__title {
            background: var(--bg-transparent);
            color: var(--secondary-color);
            padding-right: 1em;
            padding-top: 0.5em;
            padding-bottom: 0.5em;
            padding-left: 1em;
            font-family: var(--title-font);
        }
    }

    .menu {
        display: grid;
        margin-left: 2em;
        grid-auto-flow: column;
        grid-column: 1;
        align-items: center;


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
