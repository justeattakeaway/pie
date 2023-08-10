<template>
    <div>
        <div class="button-container">
            <pie-button size="xsmall">Xsmall button</pie-button>
            <pie-button size="small">Small button</pie-button>
            <pie-button size="medium">Medium button</pie-button>
            <pie-button size="large">Large button</pie-button>
            <pie-button variant="secondary">Secondary button</pie-button>
            <pie-button variant="outline">Outline button</pie-button>
            <pie-button variant="ghost">Ghost button</pie-button>
            <pie-button disabled>Disabled button</pie-button>
            <pie-button @click="increment">Click me!</pie-button>
        </div>

        <span>Counter: {{ counter }}</span>
    </div>
</template>

<script>
export default {
    data: () => ({
        counter: 0
    }),

    methods: {
        increment () {
            console.log('Click event in Nuxt page triggered');
            this.counter++;
        }
    }
};
</script>

<style>
.button-container {
    margin: 8px;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    gap: 8px;
}
</style>
