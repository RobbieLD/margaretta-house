<script setup lang="ts">
</script>

<template>
    <div class="contacts">
        <div class="contacts__contact">
            <font-awesome-icon :icon="['fas', 'envelope']" class="contacts__icon" />
            <a class="contacts__link" href="mailto:contact@margarettahouse.com">contact@margarettahouse.com</a>
        </div>
        <div class="contacts__contact">
            <font-awesome-icon :icon="['fas', 'phone']" class="contacts__icon" />
            <span class="contacts__link">+44 123 456 798</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .contacts {
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        align-content: center;
        height: 100%;
        gap: 2em;

        &__contact {
            display: grid;
            grid-auto-flow: row;
            justify-items: center;
            gap: 1.5em;
            border-left: solid 3px var(--secondary-color);
            padding-left: 2em;

            &:last-child {
                border-right: solid 3px var(--secondary-color);
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