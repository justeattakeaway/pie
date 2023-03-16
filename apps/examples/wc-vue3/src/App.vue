<template>
    <h2>Button click event</h2>
    <div class="container">
        <pie-button @click="decrement" />
        <div>{{ count }}</div>
        <pie-button @click="increment" />
    </div>
    <h2>Button variants</h2>
    <div class="container">
        <pie-button
            v-for="(value, key) in BUTTON_VARIANT"
            :key="key"
            :variant="value" />
    </div>
    <h2>Button sizes</h2>
    <div class="container">
        <pie-button
            v-for="(value, key) in BUTTON_SIZE"
            :key="key"
            :size="value" />
    </div>
</template>

<script>
import { BUTTON_VARIANT, BUTTON_SIZE } from '@justeattakeaway/pie-button';

export default {
    data () {
        return {
            count: 0,
            BUTTON_VARIANT,
            BUTTON_SIZE,
        };
    },
    methods: {
        decrement () {
            this.count--;
        },
        increment () {
            this.count++;
        },
    },
};
</script>

<style>
.container {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
}
</style>
