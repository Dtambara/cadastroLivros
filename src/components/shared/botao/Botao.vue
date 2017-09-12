<template>

    <b-button @click="buttonClicked()" :to="path" :size="size" :variant="variant">{{ texto }}</b-button>

</template>

<script>
    export default {
        props: ['size', 'variant', 'texto', 'path'],

        methods: {
            buttonClicked() {
                if(this.texto == 'Remover') {
                    if(confirm('Confirmar esta operação?')) {
                        this.$emit('removerLivro');
                    }
                }
            }
        }
    }
</script>

<style>
</style>