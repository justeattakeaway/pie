<template>
    <div>
        <h2>Button click event</h2>
        <div class="flex-wrapper">
            <pie-button @click="decrement">
                Decrement
            </pie-button>
            <div class="counter">
                Counter: {{ count }}
            </div>
            <pie-button @click="increment">
                Increment
            </pie-button>
        </div>
        <h2>Button variants</h2>
        <div>
            <pie-button
                v-for="(value, key) in BUTTON_VARIANT"
                :key="key"
                :variant="value">
                WC Button in Vue!
            </pie-button>
        </div>
        <h2>Button sizes</h2>
        <div>
            <pie-button
                v-for="(value, key) in BUTTON_SIZE"
                :key="key"
                :size="value">
                WC Button in Vue!
            </pie-button>
        </div>
    </div>
</template>

<script>
import { BUTTON_SIZE, BUTTON_VARIANT } from '@justeattakeaway/pie-button';

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

<style scoped>
@import './assets/css/styles.css';

.flex-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.counter {
    padding: 1rem;
}
</style>

