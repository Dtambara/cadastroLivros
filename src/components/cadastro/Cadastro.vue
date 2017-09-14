<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
      <div class="row">
        <imagem-upload></imagem-upload>
      </div>
  </div>
</template>

<script>

    import ImagemUpload from '../shared/upload-imagens/UploadDeImagens.vue';
    export default {
      components: {

            'imagem-upload': ImagemUpload  
        }
    }

</script>
<style scoped>
    .centralizado {
        text-align: center;
    }
</style>