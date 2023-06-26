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
        <h2>Button sizes</h2>
        <div>
            <icon-alcohol-filled size="xs"/>
        </div>
    </div>
</template>

<script>
import { buttonVariants, buttonSizes } from '@justeattakeaway/pie-button';
import { IconAlcoholFilled } from '@justeattakeaway/pie-icons-webc/icons/IconAlcoholFilled';

console.log(IconAlcoholFilled);

export default {
    data () {
        return {
            count: 0,
            buttonVariants,
            buttonSizes,
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
@import './styles.css';

.flex-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.counter {
    padding: 1rem;
}
</style>
