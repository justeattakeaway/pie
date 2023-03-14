<template>
    <div class="container">
        <pie-button @click="decrement" />
        <div>{{ count }}</div>
        <pie-button @click="increment" />
    </div>
</template>

<script>
import '@justeattakeaway/pie-button';

export default {
    data () {
        return {
            count: 0,
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
}
</style>
