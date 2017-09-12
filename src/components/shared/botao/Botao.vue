<template>

    <b-button :to="path" :size="size" :variant="variant">{{ texto }}</b-button>

</template>

<script>
    export default {
        props: ['size', 'variant', 'texto', 'path']
    }
</script>

<style>
</style>