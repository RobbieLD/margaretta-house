<script setup lang="ts">
import { RouterView } from 'vue-router'

const year = new Date().getFullYear();

</script>

<template>
  <header class="header">
    <img src="/logo.png" class="logo"/>
    
    <div class="menu">
        <RouterLink to="booking">Bookings</RouterLink>
        <RouterLink to="availability">Availability</RouterLink>
        <RouterLink to="contact">Contact</RouterLink>
        <RouterLink to="location">Location</RouterLink>
    </div>
    
    <div class="socials">
        <a target="_blank" href="https://facebook.com">
            <img src="/fb.png" class="socials__icon"/>
        </a>
        <a target="_blank" href="https://x.com">
            <img src="/x.png" class="socials__icon"/>
        </a>
        <a target="_blank" href="https://instagram.com">
            <img src="/ig.png" class="socials__icon"/>
        </a>
    </div>
  </header>
  <main class="main">
    <RouterView />
  </main>
  <footer class="footer">
    <div class="footer__address">
        <div>MARGARETTA HOUSE</div>
        <div>Main Rd</div>
        <div>Clenchwarton</div>
        <div>King's Lynn</div>
        <div>PE34 4BG</div>
    </div>
    <div class="footer__copyright">
        ©{{ year }}. Margaretta House. All rights reserved.
    </div>
  </footer>
</template>

<style lang="scss">

    :root {
        --primary-color: rgb(88, 123, 11);
        --primary-color-light: rgb(155, 202, 53);
        --on-primary-color: rgb(255, 255, 255);

        --secondary-color: rgb(38, 35, 31);
        --on-secondary-color: rgb(179, 179, 179);

        --bg-color: #fff9f3;

        --title-font: Portrait-Regular;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font: 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background-color: var(--bg-color);
    }

    #app {
        display: grid;
        grid-template-rows: 1fr 20em;
        min-height: 100vh;
    }

    .header {
        height: 5em;
        width: 100vw;
        background-color: white;
        position: fixed;
        display: grid;
        grid-template-columns: auto auto 1fr auto;
        border-bottom: solid 5px var(--secondary-color);
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
        grid-column: 2;
        align-items: center;

        & a:last-child {
            border-right: solid 1px var(--secondary-color);
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

            &:hover {
                background-color: var(--primary-color);
                color: var(--on-primary-color);
            }
        }

    }

    .socials {
        display: grid;
        grid-auto-flow: column;
        gap: 1em;
        grid-column: 4;
        margin-right: 1em;
        align-items: center;

        &__icon {
            width: 1.5em;
            opacity: 0.3;

            &:hover {
                opacity: 1;
            }
        }
    }

    .logo {
        height: 5em;
        grid-column: 1;
        justify-self: center;
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
