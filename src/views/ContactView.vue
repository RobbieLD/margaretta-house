<script setup lang="ts">
</script>

<template>
    <img src="/shed.jpg" class="page-banner"/>
    <div class="contacts">
        <div class="contacts__contact">
            <font-awesome-icon :icon="['fas', 'envelope']" class="contacts__icon" />
            <a class="contacts__link" href="mailto:contact@margarettahouse.com">contact@margarettahouse.com</a>
        </div>
        <div class="contacts__contact">
            <font-awesome-icon :icon="['fas', 'phone']" class="contacts__icon" />
            <span class="contacts__link">+44 123 456 798</span>
        </div>
        <div class="contacts__contact">
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="contacts__icon" />
            <a class="contacts__link" href="https://api.whatsapp.com/send/?phone=44123456798&text=I%27d+like+to+find+out+more.&type=phone_number&app_absent=0">Contact on WhatsApp</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .contacts {
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        align-content: center;
        margin-top: 4em;
        gap: 2em;

        &__contact {
            display: grid;
            grid-auto-flow: row;
            justify-items: center;
            gap: 1.5em;
            border-left: solid 1px var(--secondary-color);
            padding-left: 2em;

            &:last-child {
                border-right: solid 1px var(--secondary-color);
                padding-right: 2em;
            }
        }

        &__icon {
            font-size: 5em;
            color: var(--primary-color);
        }

        &__link {
            text-decoration: none;
            color: var(--primary-color);
        }
    }
</style>