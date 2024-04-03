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
                v-for="(value, key) in variants"
                :key="key"
                :variant="value">
                WC Button in Vue!
            </pie-button>
        </div>
        <h2>Button sizes</h2>
        <div>
            <pie-button
                v-for="(value, key) in sizes"
                :key="key"
                :size="value">
                WC Button in Vue!
            </pie-button>
        </div>
        <div>
            <pie-button @click="openModal">
                Open modal
            </pie-button>
        </div>
    </div>

    <pie-modal
        :isOpen="isModalOpen"
        isDismissible
        @pie-modal-close="updateModalCloseState"
        heading="Test heading">
    </pie-modal>
</template>

<script>
import { sizes, variants } from '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-modal';

export default {
    data () {
        return {
            count: 0,
            isModalOpen: false,
            variants,
            sizes,
        };
    },
    methods: {
        decrement () {
            this.count--;
        },
        increment () {
            this.count++;
        },
        openModal () {
            this.isModalOpen = true;
        },
        updateModalCloseState () {
            this.isModalOpen = false;
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
