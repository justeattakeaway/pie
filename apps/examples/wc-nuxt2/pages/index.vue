<template>
    <div>
        <div class="button-container">
            <pie-button size="xsmall">Xsmall button</pie-button>
            <pie-button size="small-productive">Small Productive button</pie-button>
            <pie-button size="small-expressive">Small Expressive button</pie-button>
            <pie-button size="medium">Medium button</pie-button>
            <pie-button size="large">Large button</pie-button>
            <pie-button variant="secondary">Secondary button</pie-button>
            <pie-button variant="outline">Outline button</pie-button>
            <pie-button variant="ghost">Ghost button</pie-button>
            <pie-button disabled>Disabled button</pie-button>
            <pie-button @click="increment">Click me!</pie-button>
            <pie-button @click="openModal">Open modal</pie-button>
        </div>

        <span>Counter: {{ counter }}</span>

        <pie-modal
            heading="Test heading"
            isDismissible
            :isOpen="isModalOpen"
            @pie-modal-close="updateModalCloseState">
        </pie-modal>
    </div>
</template>

<script>
export default {
    data: () => ({
        counter: 0,
        isModalOpen: false,
    }),

    methods: {
        increment () {
            console.log('Click event in Nuxt page triggered');
            this.counter++;
        },

        openModal () {
            this.isModalOpen = true;
        },

        updateModalCloseState () {
            this.isModalOpen = false;
        },
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
