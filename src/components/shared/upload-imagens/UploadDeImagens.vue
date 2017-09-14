<template>
 <div id="uploadImagem">
  <div v-if="!image">
    <h2>Insira a foto do livro</h2>
    <b-form-file  v-model="image" choose-label="Imagem" @change="onFileChange"></b-form-file>
  </div>
  <div v-else>
    <div class="imagem-container">
      <img :src="image" />
    </div>
    <button @click="removeImage">Remover Imagem</button>
  </div>
</div>
</template>

<script>
  export default {
    
    data() {
      return {
        image: ''
      }
    },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
  }
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: block;
}
button {
  
}
.imagem-container {
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 1em;
}
</style>