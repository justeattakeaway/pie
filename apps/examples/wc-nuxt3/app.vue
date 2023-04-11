<template>
    <div>
        <h2>Button click event</h2>
        <button>Test</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            count: 0
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

