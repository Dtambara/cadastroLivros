<template>
  <div class="corpo">

    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-livros">

      <li class="lista-livros-item" v-for="livro in livros">

        <meu-painel :titulo="livro.titulo">
          <img class="imagem-responsiva" :src="livro.caminhoLivro" :alt="livro.titulo">
        </meu-painel>

      </li>
    </ul>

  </div>
</template>
<script>

    import Painel from './components/shared/painel/Painel.vue';

    export default {

        components: {

            'meu-painel': Painel

        },

        data() {
            return {
                titulo: "Lista de Livros",
                livros: []
            }
        },

        created() {
            this.$http.get('https://dtlivraria.herokuapp.com/livros/')
            .then(res => res.json())
            .then(livros => this.livros = livros, err => console.log(err));
        }
    }
</script>

<style>
    .corpo {
        font-family: helvetic, sans-serif;
        width: 96%;
        magin: 0 auto;
    }

    .centralizado {
        text-align: center;
    }

    .lista-livros {
        list-style: none;
    }

    .lista-livros .lista-livros-item{
        display: inline-block;
    }

    .imagem-responsiva{
        width: 100%;
    }


</style>
